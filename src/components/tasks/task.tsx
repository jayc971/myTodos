'use client';
import React, {useState} from "react";
import EditStatus from "./editStatus";
import { taskProps } from "@/types";
import EditTask from "./editTask";
import DeleteTask from "./deleteTask";
import Button from "../button/button";
import { MdClose, MdEdit } from "react-icons/md";

const Task = ({task}:{task: taskProps}) => {
    const [editTask, setEditTask] = useState(false);
    const taskStyle = {
        textDecoration: task.isCompleted  ? 'line-through' : 'none',
        opacity: task.isCompleted ? .5 : 1
    }
    const handleEdit = () => {
        if (task.isCompleted){
            return
        }
        setEditTask(!editTask)
    }
    return(
        <div style={taskStyle} className="w-10/12 mx-auto flex flex-col bg-slate-900 py-4 px-5 rounded-2xl">
    <div className="flex items-center justify-between mb-2">
        <EditStatus task={task}/>
        <span className="text-center font-bold uppercase grow whitespace-normal break-all">{task.title}</span>
        
        <div className="flex items-center">
            <DeleteTask task={task}/>
            <Button bgColor={!editTask ? 'bg-fuchsia-400' : 'bg-gray-600'} actionButton onClick={handleEdit} text={!editTask ? <MdEdit/> : <MdClose/>} />
        </div>
    </div>
    {editTask &&(
    <div className="w-full  items-center ">
        <EditTask task={task}/>
    </div>     ) }
</div>
    
    )
}

export default Task;