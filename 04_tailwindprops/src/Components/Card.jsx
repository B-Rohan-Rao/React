import React from 'react';

export default function Card({game='Default',name='FuzzyPack'}){
    return (
        <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl bg-blue-900">
            <div>
                <img className="size-48 shadow-xl rounded-md" alt="" src="https://i.pinimg.com/originals/e7/41/85/e74185538462b372d6e62791b399138f.jpg"/>
            </div>
            <div className="flex items-center md:items-start">
                <span className="text-2xl font-medium">{game}</span><hr/>
                <span className="font-medium text-sky-500">{name}</span>
            </div>
        </div>
    );
}