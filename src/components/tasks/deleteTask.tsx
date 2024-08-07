import { taskProps } from "@/types";
import React from "react";
import Form from "../form/form";

import Button from "../button/button";
import { FaTrash } from "react-icons/fa";
import Input from "../input/input";

import * as action from '@/actions';

const DeleteTask = ({task}:{task: taskProps})=>{
    return (
        <Form action={action.deleteTask}>
            <Input type="hidden" name="inputId" value={task.id}></Input>
            <Button actionButton type="submit" bgColor="bg-red-400" text={<FaTrash/>}></Button>
        </Form>
    );
}

export default DeleteTask;