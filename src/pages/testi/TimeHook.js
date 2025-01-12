import React,{useEffect,useState,useRef} from 'react';
import internal from "stream";


export default function TimeHook(){
    const [time,setTime]=useState(0)
    const intervalref=useRef()
    useEffect(()=>{
         intervalref.current =setInterval(()=>{
            setTime(prevTime=>prevTime+1)
        },1000)
        return()=>{
            clearInterval(interval)
        }
    },[])
    return(
        <div>
            Timer : {time}
            <button onClick={()=>clearInterval(intervalref.current)}>stop</button>
        </div>
    )
}