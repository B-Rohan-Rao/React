import React from 'react';
import {useParams} from "react-router-dom";

export default function UserPage() {
    const {userid} = useParams()
    return(
        <div className='bg-gray-600 text-white text-3xl p-4 rounded-lg border-none'>User: {userid}</div>
    )
}