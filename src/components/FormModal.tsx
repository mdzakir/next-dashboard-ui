"use client";

import Image from "next/image";

interface FormModalProps {
    table: 'teacher' | 'student' | 'parent' | 'subject' | 'class' | 'lesson' | 'exam' | 'assignment' | 'result' | 'attendance' | 'event' | 'announcement';
    type: 'create' | 'update' | 'delete';
    data?: any;
    id?: string;
}

const FormModal = ({table, type, data, id}: FormModalProps) => {
    const size = type === "create" ? 'w-8 h-8' : 'w-7 h-7';
    const bgColor = type === "create" ? 'bg-smsYellow-200' : type === 'update' ? 'bg-smsSky-200' : 'bg-smsPurple-200';
    const bgHoverColor = type === "create" ? 'bg-smsYellow-300' : type === 'update' ? 'bg-smsSky-300' : 'bg-smsPurple-300';
    return (
        <div className="">
            <button className={`${size} flex items-center justify-center rounded-full ${bgColor} hover:${bgHoverColor}`} >
                <Image src={`/${type}.png`} alt="" width={16} height={16} />
            </button>
        </div>
    )
}

export default FormModal