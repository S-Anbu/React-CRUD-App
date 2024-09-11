import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import { Link, useNavigate, useParams } from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  const [tHead, setTHead] = useState([])
  const [tdata, setTData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3030/users")
      .then((response) => {
        console.log(response.data);
        setTHead(Object.keys(response.data[0]))
        setTData(response.data)
      }).catch(err=>console.log(err))
  }, [])
const deletItems=(id)=>{
  const conf = window.confirm( "Do you want to delete");
if(conf) {
  axios.delete('http://localhost:3030/users/'+id)
  .then(res=>{
    alert('record has deleted')
    navigate('/')
  }).catch(err=>console.log(err))
}
}
  return (
    <>
      <div className='flex flex-col items-center relative mt-40'>
        <div className='absolute left-20 flex items-center space-x-3 mb-10 '>
          <span>Click Add button to Create new data</span>
          <button className='px-4 py-2 bg-orange-400 rounded  '> <Link to='/create'>+ ADD</Link> </button>
        </div>
        <table className='mt-12 '>
          <thead>
            <tr>
              {tHead.map((head, index) => (
                <th key={index}>{head}</th>
              ))}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tdata.map((body, i) => (
              <tr key={i}>
                <td>{body.id}</td>
                <td>{body.name}</td>
                <td>{body.username}</td>
                <td>{body.email}</td>
                <td>{body.phone}</td>
                <td>{body.website}</td>
                <td className='flex space-x-2 '>
                  <button className='px-4 py-1 bg-green-400 rounded'> <Link to={`/update/${body.id}`}>Edit</Link> </button>
                  <button className='px-4 py-1 bg-red-400 rounded' onClick={()=>deletItems(body.id)}> Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
