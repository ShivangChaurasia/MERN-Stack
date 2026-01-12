
import {useState} from 'react'

export default function Greeting(){
  const [greeting, setGreeting] = useState(false)

  const handleClick = ()=>{
    setGreeting(!greeting)
  }
  return(
    <>
    <div className='text-center'>
      <h1 className = "text-2xl font-bold text-center text-gray-800">{greeting ? "Good Morning" : "Good Evening"}</h1>
      <button onClick={handleClick} className={`border-2 border-gray-800 text-gray-800 px-4 py-2 m-4 rounded-md ${greeting ? 'bg-blue-500': 'bg-green-500'}`}>Toggle</button>
    </div>
    </>
  )
}