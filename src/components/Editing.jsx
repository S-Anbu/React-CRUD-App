import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
const Editing = () => {
  const { id } = useParams()
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3030/users/"+id)
      .then(res => setData(res.data))
  }, [])

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put("http://localhost:3030/users/"+id, data)
      .then(res => {
        alert('Record Updated Sucessfully')
        navigate('/')
      }).catch(err => console.log(err));

  }
  return (
    <div className='flex justify-center items-center'>
      <div className=' bg-slate-200 flex justify-center items-center max-w-xl p-10 rounded mt-10'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="Name">Name: </label>
            <input type="text" name='Name' value={data.name} onChange={e => setData({ ...data, name: e.target.value })} />
          </div>
          <div>
            <label htmlFor="Username"> Username:</label>
            <input type="text" name='Username' value={data.username} onChange={e => setData({ ...data, username: e.target.value })} />
          </div>
          <div>
            <label htmlFor="">Email: </label>
            <input type="email" value={data.email} onChange={e => setData({ ...data, email: e.target.value })} />
          </div>
          <div>
            <label htmlFor="">Phone: </label>
            <input type="number" value={data.phone} onChange={e => setData({ ...data, phone: e.target.value })} />
          </div>
          <div>
            <label htmlFor="">Website: </label>
            <input type="text" value={data.website} onChange={e => setData({ ...data, website: e.target.value })} />
          </div>
          <input className='px-4 py-2 bg-gray-400' type="submit" value="submit" />
        </form>
      </div>
    </div>
  )
}

export default Editing