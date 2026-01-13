import {useState} from 'react';

export default function ToggleButton(){
    const [toggle, settoggle] = useState(false);

    const handleToggle = ()=>{
        settoggle(!toggle);
    }

    return(
        <div className='border-2 ml-[600px] mr-[600px] mt-[300px] text-center rounded-lg p-4 bg-gradient-to-r from-blue-500 to-green-500'>
            <h1 className='mb-4 text-white font-bold text-2xl'>Toggle Button</h1>
            <button onClick={handleToggle} className={`w-20 h-10 rounded-md text-white ${toggle ? 'bg-blue-500' : 'bg-green-500'}`}>{toggle ? "ON" : "OFF"}</button>
        </div>
    )
}