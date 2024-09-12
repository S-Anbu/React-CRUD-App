import React, { useState } from 'react'
import "./Add.css"  
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Add = () => {
    const navigate= useNavigate()
    const [addInput, setaddInput] = useState({id:'',name:'',username:'',email:'',phone:'',website:''})
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3030/users",addInput)
        .then(res=>{
            alert('Record added Sucessfully')
            navigate('/')
        }).catch(err=>console.log(err));
    
    }
  return (
    <div className='flex justify-center items-center h-svh'>
    <div className=' bg-blue-100  flex justify-center items-center max-w-xl p-10 rounded '>
        <form onSubmit={handleSubmit}>
            <label htmlFor="ID">ID: </label>
            <input type="number"  id='ID'required onChange={e=>setaddInput ({...addInput, id: e.target.value})}/>
            <label htmlFor="Name">Name: </label>
            <input type="text" id='Name'  onChange={e=>setaddInput ({...addInput, name: e.target.value})}/>
            <label htmlFor="Username"> Username:</label>
            <input type="text" id='Username' onChange={e=>setaddInput ({...addInput, username: e.target.value})} />
            <label htmlFor="email">Email: </label>
            <input type="email" id='email'  onChange={e=>setaddInput ({...addInput,email: e.target.value})}/>
            <label htmlFor="Phone">Phone: </label>
            <input type="number" id='Phone'  onChange={e=>setaddInput ({...addInput, phone: e.target.value})} />
            <label htmlFor="Website">Website: </label>
            <input type="text" id='Website'  onChange={e=>setaddInput ({...addInput, website: e.target.value})}/>
            <input className='px-4 py-2 mt-3 bg-green-300  font-semibold' type="submit" value="Submit" />
        </form>
    </div>
    </div>
  )
}

export default Add