import React from 'react'
import { inputProps } from '@/types';

const Input = ({name, type, placeholder, value, onChange}: inputProps) => {
    return(
        <div className='w-full'>
            <input onChange={onChange} name={name} type={type} placeholder={placeholder} value={value}
            className='block w-full p-4 mx-2 border rounded-lg text-base bg-gray-700 border-gray-600 placeholder-gray-400 text-white'
            />
        </div>
    )
}

export default Input;