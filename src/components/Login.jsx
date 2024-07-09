import React from "react";
import { useState } from 'react';

export default function LogInForm(){
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("")

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const result = await fetch('http://localhost:5432/book_fair/users/login', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username: userEmail, password: userPassword})
            });
            const info = await result.json();
            setToken(info.token);
        }catch(e){
            console.error('Failed to login')
        }
        setUserEmail("");
        setUserPassword("");
    }


    return(
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Email:</label>
                        <input
                            type="email"
                            name="userEmail"
                            value={userEmail}
                            onChange={(e)=>{
                                setUserEmail(e.target.value)
                        }}
                            placeholder="Email Login"/>
                    <label>Password:</label>
                        <input
                            type="password"
                            name="userPassword"
                            value={userPassword}
                            onChange={(e)=>{
                                setUserPassword(e.target.value)
                            }}
                            placeholder="password"
                        ></input>
                        <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}