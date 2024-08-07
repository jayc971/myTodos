import React from "react";
import EditStatus from "./editStatus";
import { taskProps } from "@/types";
import EditTask from "./editTask";
import DeleteTask from "./deleteTask";

const Task = ({task}:{task: taskProps}) => {
    const taskStyle = {
        textDecoration: task.isCompleted  ? 'line-through' : 'none',
        opacity: task.isCompleted ? .5 : 1
    }
    return(
        <div style={taskStyle} className="w-10/12 mx-auto flex items-center justify-between bg-slate-900 py-4 px-20 rounded-2xl">
            <EditStatus task={task} id={""} isCompleted={task.isCompleted}/>
            <span className="text-center font-bold uppercase grow">{task.title}</span>
            <div className="flex items-center mx-2">
                <EditTask task={task}/>
            </div>
            <div className="flex items-center ">
                <DeleteTask task={task}/>
            </div>
        </div>
    )
}

export default Task;