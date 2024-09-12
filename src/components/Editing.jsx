import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
const Editing = () => {
  const navigate = useNavigate()

  const cancelFunc=()=>{
    navigate('/')
  }
  const { id } = useParams()
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3030/users/"+id)
      .then(res => setData(res.data))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put("http://localhost:3030/users/"+id, data)
      .then(res => {
        alert('Record Updated Sucessfully')
        navigate('/')
      }).catch(err => console.log(err));      
  }
  return (
    <div className='flex justify-center items-center h-svh'>
      <div className=' bg-slate-200 flex justify-center items-center max-w-xl p-10 rounded mt-10'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="Name">Name: </label>
            <input type="text" name='Name' value={data.name} onChange={e => setData({ ...data, name: e.target.value })} />
            <label htmlFor="Username"> Username:</label>
            <input type="text" name='Username' value={data.username} onChange={e => setData({ ...data, username: e.target.value })} />
            <label htmlFor="">Email: </label>
            <input type="email" value={data.email} onChange={e => setData({ ...data, email: e.target.value })} />
            <label htmlFor="">Phone: </label>
            <input type="number" value={data.phone} onChange={e => setData({ ...data, phone: e.target.value })} />
            <label htmlFor="">Website: </label>
            <input type="text" value={data.website} onChange={e => setData({ ...data, website: e.target.value })} />
          <button className='px-4 py-2 bg-green-300 mt-3' type="submit">Submit</button>
          <button onClick={()=>cancelFunc()} className='px-4 py-2 bg-gray-400 mt-3'>Cancel</button>
        </form>
      </div>
    </div>
  )
}

export default Editing