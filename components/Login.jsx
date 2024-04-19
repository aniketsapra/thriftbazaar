import { useState } from "react"
import CloseIcon from '@mui/icons-material/Close';

const Login = ({setShowLogin}) => {

  const [currState, setCurrState] = useState('Login');

  return (
    <div className="login-popup font-poppinsfont">
      <form className="login-popup-container">
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <CloseIcon className="closeicon" onClick={()=>setShowLogin(false)} />
        </div>
        <div className="login-popup-inputs">
          {currState==='Login'?<></>:<input type="text" placeholder="Your Name" required />}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{currState==='Sign Up'?'Create Account':'Login'}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState==='Login'?<p>Create a new account? <span onClick={()=>setCurrState('Sign Up')}>Click Here</span></p>
        :<p>Already have an account? <span onClick={()=>setCurrState('Login')}>Login Here</span></p>}
      
      </form>
    </div>
  )
}

export default Login
