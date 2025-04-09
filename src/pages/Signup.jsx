import  {useState} from 'react'
import { useNavigate } from 'react-router-dom'


const Signup = () =>{
  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [pass, setPass] = useState("")

  const submitForm = () =>{
    const allValue = {name, mail, pass}
    // console.log(allValue);
    localStorage.setItem('user', JSON.stringify(allValue))
    navigate('/Signin')
    
  }
  

  


      
  


return (
    <>  
    <div className='card p-4 shadow '>
    <h1 className='text-center mb-4'>Welcome to Signup Page</h1>
  <input type="text" className="form-control" placeholder="Name" aria-label="Username" aria-describedby="addon-wrapping" value={name} onChange={(e)=>setName(e.target.value)}/>

  <input type="email" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="addon-wrapping" value={mail} onChange={(e)=>setMail(e.target.value)}/>

  <input type="password" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping" value={pass} onChange={(e)=>setPass(e.target.value)}/>

    <button onClick={submitForm} type="submit" className="btn btn-primary">Signup</button>
</div>

    </>
)

}

export default Signup