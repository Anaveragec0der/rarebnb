import axios from "axios";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function LoginPage() {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[redirect,setRedirect]=useState(false)
  const {setUser}=useContext(UserContext)
  async function handleLoginSubmit(e){
    e.preventDefault()
    try{
      const {data}=await axios.post('/login',{
        email,
        password,
      })
      setUser(data)
      alert('login successful')
      setRedirect(true)
    }catch(err){
      alert('Login failed')
    }
  }

  if(redirect){
    return <Navigate to={'/'}/>
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form onSubmit={handleLoginSubmit} className="max-w-md mx-auto">
          <input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="your@email.com" />
          <input vaue={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="password" />
          <button className="primary">Login</button>
          <div className="text-center py-2 text-gray-500">
            Don't have an account yet?
            <Link className="underline text-black" to={'/register'}> Register now </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
