import React, { useState } from 'react'
import "./Add.css"  
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Add = () => {
    const navigate= useNavigate()
    const [addInput, setaddInput] = useState({name:'',username:'',email:'',phone:'',website:''})
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3030/users",addInput)
        .then(res=>{
            alert('Record added Sucessfully')
            navigate('/')
        }).catch(err=>console.log(err));
    
    }
  return (
    <div className='flex justify-center items-center'>
    <div className=' bg-slate-200 flex justify-center items-center max-w-xl p-10 rounded mt-10'>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="Name">Name: </label>
            <input type="text" name='Name'  onChange={e=>setaddInput ({...addInput, name: e.target.value})}/>
            </div>
            <div>
            <label htmlFor="Username"> Username:</label>
            <input type="text" name='Username' onChange={e=>setaddInput ({...addInput, username: e.target.value})} />
            </div>
            <div>
            <label htmlFor="">Email: </label>
            <input type="email"  onChange={e=>setaddInput ({...addInput,email: e.target.value})}/>
            </div>
            <div>
            <label htmlFor="">Phone: </label>
            <input type="number"  onChange={e=>setaddInput ({...addInput, phone: e.target.value})} />
            </div>
            <div>
            <label htmlFor="">Website: </label>
            <input type="text"  onChange={e=>setaddInput ({...addInput, website: e.target.value})}/>
            </div>
            <input className='px-4 py-2 bg-gray-400' type="submit" value="submit" />
        </form>
    </div>
    </div>
  )
}

export default Add