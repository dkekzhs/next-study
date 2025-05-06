import React, {useRef, useState} from 'react';

export default function UseRefTest(){
    const countRef = useRef(0);
    let countVar = 0;
    const [render, setRender] = useState(0);
  
    const doRendering = () =>{
      setRender(render +1);
    }
  
    const increaseCountRef = () =>{
      countRef.current += 1;
    } 
    const increaseCountVar = () =>{
      countVar +=1;
    } 
    return (
      <div>
      <p> Ref : {countRef.current}</p>
      <button onClick={doRendering}>render</button>
      <button onClick={increaseCountVar}>Var + 1</button>
      <button onClick={increaseCountRef}>Ref + 1</button>
      </div>
    );
}

