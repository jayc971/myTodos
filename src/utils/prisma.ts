import { Prisma, PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

// Store a map of recent requests
let recentRequests:any;
recentRequests = new Map<string, number>();

export function throttleMiddleware(): Prisma.Middleware {
  return async (params, next) => {
    const requestId = `${params.model}-${params.action}-${JSON.stringify(params.args)}`;
    const now = Date.now();
    const cooldownPeriod = 5000; // 5 seconds cooldown period

    if (recentRequests.has(requestId) && now - recentRequests.get(requestId) < cooldownPeriod) {
      throw new Error("Please wait before making this request again.");
    }

    recentRequests.set(requestId, now);

    const result = await next(params);

    // Clean up old requests from the map
    recentRequests.forEach((timestamp:any, key:any) => {
      if (now - timestamp > cooldownPeriod) {
        recentRequests.delete(key);
      }
    });

    return result;
  };
}