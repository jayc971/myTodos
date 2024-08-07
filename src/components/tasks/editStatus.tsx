import { taskProps } from "@/types";
import Button from "../button/button";
import Form from "../form/form";
import Input from "../input/input";
import * as action from "@/actions";
import { FaCheck } from "react-icons/fa";
import { actionAsyncStorage } from "next/dist/client/components/action-async-storage-instance";

const EditStatus = ({task}: taskProps) => {
    return (
        <Form action={action.editStatus}>
            <Input name="inputId" value={task.id} type="hidden"></Input>
            <Button text={<FaCheck/>} type="submit" actionButton bgColor={task.isCompleted ? 'bg-green-400' : 'bg-blue-500'}></Button>
        </Form>
    )
}

export default EditStatus;