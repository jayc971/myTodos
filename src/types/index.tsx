import { ReactNode } from "react";

export interface inputProps{
    name: string;
    type: string;
    placeholder?: string;
    value?: string;
    onChange?: (e:any)=> void;
}

export interface formProps{
    children: ReactNode;
    action: (formData: FormData) => void;
    className?: string;
    onSubmit?: () => void;
}

export interface buttonProps{
    type?: "button" | "submit" | "reset";
    text: string | ReactNode;
    onClick?: ()=>void;
    actionButton?: boolean;
    bgColor?: string;
}

export interface taskProps{
    id: string;
    title?: string | null;
    isCompleted: boolean;
    createdAt?: Date;
    task?: any;
}