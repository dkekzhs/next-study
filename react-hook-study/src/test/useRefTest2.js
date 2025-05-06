import React, {useEffect, useRef, useState} from 'react';

export default function UseRefTest2(){
    const inputRef = useRef();

    useEffect(() =>{
        console.log(inputRef);
        inputRef.current.focus();

    },[]);

    const login = () =>{
        alert(`weclome , ${inputRef.current.value}`);
        inputRef.current.focus();
    }

    return (
      <div>
        <input ref={inputRef} type='text' placeholder='username'/>
        <button onClick={login}>login</button>
      </div>
    );
}

