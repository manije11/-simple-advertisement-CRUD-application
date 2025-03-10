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
        <div className="bg-gradient-to-r from-green-500 to-pink-500 p-6 stacked-fractions grid grid-cols-3 gap-4">
            <p className="font-mono text-lg font-bold bg-blue-300">Timer : {time}</p>
            <button onClick={()=>clearInterval(intervalref.current)} className=" bg-pink-200 text-semibold italic font-semibold text-blue-500">stop</button>
        </div>
    )
}