// Build a ToggleButton component that switches between “ON” and “OFF” when clicked.
// Use the useState hook to track the button’s state and apply different styles (e.g., background color) depending on whether it’s ON or OFF.



import {useState} from 'react'
export default function ToggleButton(){
  const [toggle, settoggle] = useState(false);

  const handleClick = ()=>{
    settoggle(!toggle);

  }

  return(
    <>
    <div className='text-center'>
        <h1 className = "text-2xl font-bold text-center text-gray-800">Toggle Button</h1>
      <button onClick = {handleClick} className = {`text-white px-4 py-2 m-4 rounded-md  ${toggle ? 'bg-blue-500' : 'bg-gray-500'}`} >{toggle  ? "ON" : "OFF"}</button>
    </div>
    </>
  )

}