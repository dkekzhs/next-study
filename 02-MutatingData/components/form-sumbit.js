"use client"

import { useFormStatus } from "react-dom";

export default function FormSumbit(){
    const status = useFormStatus();

    if( status.pending){
        return <p>Creating post...</p>
    }

    return (
        <>
        <button type="reset">Reset</button>
        <button>Create Post</button>
        </>
    )
}