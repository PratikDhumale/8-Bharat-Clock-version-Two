import { useEffect, useState } from "react";

let CurrentTime = ()=>{
    const[time,SetTime]=useState(new Date());

useEffect(()=>{
    console.log("Interval has been setup");
const intervalId = setInterval(()=>{
SetTime(new Date());
},1000);

return() =>{
    clearInterval(intervalId);
}

},[]);
 
    return <p>This is the current time:{time.toLocaleDateString()}
    -{""} {time.toLocaleTimeString()}
    </p>
}
export default CurrentTime;