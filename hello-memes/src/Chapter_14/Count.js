import React, { useEffect, useState } from "react";
import { Button } from "antd";

export default function Count(){
    const [time, setTime] = useState(0);
    const [show, setShow] = useState(false);

    useEffect(()=>{
        if(show){
            const interval = setInterval(() => {
               setTime(time+1)
            }, 1000);
            return ()=>clearInterval(interval)
        }   
    },[time, show]);

    const start=()=>{
        setShow(true);
    }
    const stop=()=>{
        setShow(false);
    };


    return(
        <>
        <h1>useEffect(),hook Example</h1>
        <h2>timer that uses the useEffect() and useState() hook</h2>
        <h2>time:{time}</h2>
        {show ? <Button type="primary"
          shape="round"
          size={"large"}
          danger onClick={stop}>stop</Button>
          :<Button type="primary"
          shape="round"
          size={"large"} onClick={start}>Start</Button>}

        <Button  type="primary"
        ghost
        shape="round"
        size={"large"} onClick={()=>setTime(0)}>reset</Button>
        </>
    )
}
