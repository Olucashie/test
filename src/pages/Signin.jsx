import React from 'react'

const Signin = () => {
    const [email, setMail] = useState('')
      const [password, setPass] = useState('')
      const navigate = useNavigate()

      const submit = () =>{
        const user = JSON.parse(localstorage.getItem('user'))
      }
    
  return (
    <>
     <div className='card p-4 shadow '>

     <input type="email" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="addon-wrapping" value={email} onChange={(e)=>setMail(e.target.value)}/>

<input type="password" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping" value={password} onChange={(e)=>setPass(e.target.value)}/>

  <button onClick={login} type="button" class="btn btn-primary">Login</button>
</div>
    </>
  )
}

export default Signin