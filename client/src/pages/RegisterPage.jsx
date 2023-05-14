import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
export default function RegisterPage(){
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
async function registerUser(e){
    e.preventDefault()
    try{
      await axios.post('/register',{
        name,
        email,
        password,
      })
      alert("Registration successful. Now you can log in")
    }catch(err){
      alert('Registration Failed. Please try again')
    }
  }
    return(
        <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form onSubmit={registerUser} className="max-w-md mx-auto">
          <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="John Doe"/>  
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="your@email.com" />
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="password" />
          <button className="primary">Register</button>
          <div className="text-center py-2 text-gray-500">
            Already a member?
            <Link className="underline text-black" to={'/login'}> Login </Link>
          </div>
        </form>
      </div>
    </div>
    )
}