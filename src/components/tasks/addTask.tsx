import * as action from "@/actions";
import Button from "../button/button";
import Form from "../form/form";
import Input from "../input/input";
import { FaPlus } from "react-icons/fa";

const AddTask = () => {
    return(
        <div className="w-10/12 ">
            <Form action={action.addTask}>
                <div className="flex gap-2 items-center">
                    <Input name="input" type="text" placeholder="Add Your Task.."/>
                    <Button type="submit" text={<FaPlus/>} bgColor="bg-blue-600"/>
                </div>
            </Form>
        </div>
    )
}
export default AddTask;