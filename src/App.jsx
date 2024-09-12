import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [tHead, setTHead] = useState([])
  const [tdata, setTData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3030/users")
      .then((response) => {
        console.log(response.data);
        setTHead(Object.keys(response.data[0]))
        setTData(response.data)
      }).catch(err => console.log(err))
  }, [])
  const deleteItems = (id) => {
    const conf = window.confirm("Do you want to delete");
    if (conf) {
      axios.delete('http://localhost:3030/users/' + id)
        .then(res => {
          alert('record has deleted')
          setTData(tdata.filter(item => (item.id !== id)))
        }).catch(err => console.log(err))
    }
  }
  return (
    <>
      <div className='flex flex-col items-center justify-center overflow-x-auto  '>
        <div className=' flex items-center space-x-1 sm:space-x-3 mt-32 mb-10 '>
          <span className='text-sm sm:text-lg '>Click Add  to Create new data</span>
          <button className='px-2 sm:px-4 py-2 bg-orange-500 rounded text-white font-semibold '> <Link className='text-sm' to='/create'>+ ADD</Link> </button>
        </div>
        <div className='overflow-x-auto content-start'>
          <table className='text-sm  whitespace-nowrap overflow-x-auto'>
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
                    <button className='px-4 py-1 bg-green-500 rounded text-white font-semibold '> <Link to={`/update/${body.id}`}>Edit</Link> </button>
                    <button className='px-4 py-1 bg-red-500 rounded text-white font-semibold' onClick={() => deleteItems(body.id)}> Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
