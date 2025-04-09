import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () =>{
  const [name, setName] = useState('')
  const [email, setMail] = useState('')
  const [password, setPass] = useState('')

  const  navigate = useNavigate()

  const submitForm =()=>{
    console.log(name, password, mail)
    const data = {name, password, mail}
    localstorage.setItem('user', JSON.stringify(data))
    
    navigate('/signin')
      }
      



      
  


return (
    <>  
    <div className='card p-4 shadow '>
    <h1 className='text-center mb-4'>Welcome to Signup Page</h1>
  <input type="text" class="form-control" placeholder="Name" aria-label="Username" aria-describedby="addon-wrapping" value={name} onChange={(e)=>setName(e.target.value)}/>

  <input type="email" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="addon-wrapping" value={email} onChange={(e)=>setMail(e.target.value)}/>

  <input type="password" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping" value={password} onChange={(e)=>setPass(e.target.value)}/>

    <button onClick={submitForm} type="button" class="btn btn-primary">Signup</button>
</div>

    </>
)

}

export default Signup