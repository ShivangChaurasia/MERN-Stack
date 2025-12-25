import React,{useState} from "react";

export default function Counter(){
    const [count,setCount] = useState(0);

    return(
        <>
            <div class="text-center mt-4 flex flex-col items-center justify-center">
                <button class="font-bold border-2 p-2 rounded-2xl hover:scale-105 duration-300"><span style={{ fontSize: "24px" }}>← </span>Back</button>
                <h1 class="font-bold text-4xl mb-2" >Welcome Buddy!</h1>
                <h2 class="text-2xl">This is Counter Page</h2>
            </div>
            <br></br>
            <div class="space-x-4 flex justify-center items-center">
                <button class="border-2 pl-2 pr-2 rounded-md hover:scale-105 duration-300" onClick={()=>setCount(count+1)}>+</button>
                <h1>Counter Value: {count}</h1>
                <button class="border-2 pl-2 pr-2 rounded-md hover:scale-105 duration-300" onClick={()=>setCount(count-1)}>-</button>

            </div>

        </>
    );
}