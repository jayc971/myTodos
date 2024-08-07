"use server";

import {throttleMiddleware} from '@/utils/prisma';
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

prisma.$use(throttleMiddleware());

export async function addTask(formData: FormData){

    let input = formData.get('input') as string | undefined;
    if (input !== undefined && !input.trim()){
        return;
    }

    try{
        await prisma.todos.create({
            data:{
                title:input,
            }
        })
    }catch(e){
        console.error(e)
    }finally{
       
    }
    input = undefined;
    revalidatePath("/")
}

export async function editStatus(formData: FormData){
    const inputId = formData.get("inputId") as string;
    const task = await prisma.todos.findUnique({
        where:{
            id: inputId
        }
    })
    const updateStatus = !task?.isCompleted;

    await prisma.todos.update({
        where:{
            id: inputId
        },
        data:{
            isCompleted: updateStatus
        }
    })

    revalidatePath("/")
}

export async function editTask(formData: FormData){
    const newTitle = formData.get("newTitle") as string;
    const inputId = formData.get("inputId") as string;

    await prisma.todos.update({
        where:{
            id: inputId
        },
        data: {
            title: newTitle
        }
    })
    
    revalidatePath("/")
}

export async function deleteTask(formData: FormData){
    const inputId = formData.get("inputId") as string;

    await prisma.todos.delete({
        where:{
            id: inputId
        }
    })
    
    revalidatePath("/")
}