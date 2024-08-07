'use client';

import React, {useState} from 'react';
import Button from '../button/button';
import { MdEdit } from 'react-icons/md';
import Form from '../form/form';
import { taskProps } from '@/types';
import Input from '../input/input';
import * as action from '@/actions';
import { FaSave } from 'react-icons/fa';

const EditTask = ({task}:{task : taskProps}) => {
    const [editTask, setEditTask] = useState(false);
    const [taskTitle, setTaskTitle] = useState(task.title?.toString());
    const handleEdit = () => {
        if (task.isCompleted){
            return
        }
        setEditTask(!editTask)
    }
    const handleSubmit = () =>{
        setEditTask(false)
    }
    const handleInputChange = (e:any) => {
        setTaskTitle(e.target.value);
      };
    return(
        <div className='flex gap-5 items-center'>
            <Button bgColor="bg-fuchsia-400" actionButton onClick={handleEdit} text={<MdEdit/>} />
            {editTask ? (
                <Form action={action.editTask} onSubmit={handleSubmit}>
                     <Input name='inputId' value={task.id} type="hidden"></Input>
                    <div className='flex gap-5 items-center'>
                        <Input value={taskTitle} onChange={handleInputChange} name="newTitle" placeholder='Edit Task' type="text"></Input>
                        <Button type="submit" bgColor="bg-blue-400" actionButton text={<FaSave/>}></Button>
                    </div>
                </Form>
            ) : null}
        </div>
    )
}

export default EditTask;