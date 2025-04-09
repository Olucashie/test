import { useState } from "react"
import { useNavigate } from "react-router-dom"



const Signin = () => {

    const navigator = useNavigate()
    const [mail, setMail] = useState("")
    const [pass, setPass] = useState("")

    const login = () => {
        const getUser = JSON.parse(localStorage.getItem('user'))
        if(getUser.mail === mail && getUser.pass === pass){
            alert("Login Successful")
            navigator('/Dashboard')
        }else{
            alert("Invalid Credentials")
        }
    }

 
    
  return (
    <>
     <div className='card p-4 shadow '>

     <input type="email" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="addon-wrapping" value={mail} onChange={(e)=>setMail(e.target.value)}/>

<input type="password" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping" value={pass} onChange={(e)=>setPass(e.target.value)}/>

  <button onClick={login} type="button" class="btn btn-primary">Login</button>
</div>
    </>
  )
}

export default Signin