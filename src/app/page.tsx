import AddTask from "@/components/tasks/addTask";
import Task from "@/components/tasks/task";
import { prisma } from "@/utils/prisma";

async function getData(){
  const data = await prisma.todos.findMany({
    select:{
      title: true,
      id: true,
      isCompleted: true
    },
    orderBy:{
      createdAt: 'asc',
    }
  })

  return data;
}

export default async function Home() {
  const data = await getData();
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <h1 className="text-4xl font-extrabold uppercase">My Todos</h1>
      <div className="flex justify-center flex-col items-center">
        <AddTask/>
        <div className="flex flex-col gap-5 items-center justify-center mt-10 w-screen">
          {data.map((task, id)=>
            <div key={id} className="w-full">
              <Task task={task}/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
