
import { useState } from 'react';

export default function RegForm(){

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const handleSign = (e)=>{
        e.preventDefault();
        if(!email || !pass){
            alert("Please fill in all fields");
        }else if(!email.includes('@') || !email.includes('.')){
            alert("Please enter a valid email address");
        }else if(pass.length < 6){
            alert("Password must be at least 6 characters long");
        }else{
            alert("Sign In Successful");
        }
    }

    return(
        <>
            <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <input placeholder="Enter Email" type="email" name="email" value={email} style={{marginBottom: 10}} onChange={(e)=>setEmail(e.target.value)} required>
                </input>
                <input placeholder="Password" type="password" name="password" value={pass} style={{marginBottom: 10}} onChange={(e)=>{setPass(e.target.value)}} required>
                </input>
                <button onClick={handleSign}>Sign In</button>
            </form>
        </>
    )
}