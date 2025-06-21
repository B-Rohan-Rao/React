import React from 'react';

export default function Checkboxes({name, id, checked, onChange}){
    return (
        <div className='flex item-center gap-x-1'>
            <input type="checkbox"
                   id={id}
                   defaultChecked={checked}
                   onChange={() => onChange((prev) => !prev)}/>
            <label htmlFor={id}>{name}</label>
        </div>
    )
}