import { taskProps } from "@/types";
import Button from "../button/button";
import Form from "../form/form";
import Input from "../input/input";
import * as action from "@/actions";
import { FaCheck } from "react-icons/fa";

const EditStatus = ({task}: {task:taskProps}) => {
    return (
        <Form action={action.editStatus}>
            <Input name="inputId" value={task.id} type="hidden"></Input>
            <Button text={<FaCheck/>} type="submit" actionButton bgColor={task.isCompleted ? 'bg-green-400' : 'bg-blue-500'}></Button>
        </Form>
    )
}

export default EditStatus;