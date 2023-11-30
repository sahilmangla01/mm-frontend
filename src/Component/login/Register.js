import React,{useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


const registerInput ={
    firstName:"",
    lastName:"",
    email:"",
    password:""
  }
const Register = () => {
    
    const [data , setData]= useState(registerInput)
    const navi = useNavigate()
  
    const changeHandler =(input , value)=>{
      setData((prev)=>{
        return{
          ...prev,
          [input]: value
        }
      })
    }
  
    const submit =(e)=>{
      e.preventDefault()
      setData(registerInput)
      
      axios.post('https://mm-server-zvj1.onrender.com/api/register',data)
      .then((res)=>console.log(res.data),navi("/login"))
      .catch(err => console.log(err))
    }
  
  
    return (
     
           <form className='signup__form'>
          <h1>Register</h1>
          <div className='signup__display'>
          
          <span>First Name</span>
          <input id='firstName' type='text' placeholder=' ' onChange={e=>changeHandler("firstName",e.target.value)} value={data['firstName']} autoComplete='off' required/>
          </div>
  
        <div className='signup__display'>
        
          <span>Last Name</span>
          <input id='lastName' type='text' placeholder=' ' onChange={e=>changeHandler("lastName",e.target.value)} value={data['lastName']} autoComplete='off' required/>
        </div>
         
          <div className='signup__display'>
          <span>Email</span>
          <input id='email' type='email' placeholder=' ' onChange={e=>changeHandler("email",e.target.value)} value={data['email']}autoComplete='off'  required/>
          </div>
          
          <div className='signup__display'>
          <span>Password</span>
          <input id='password' type='password' placeholder=' ' onChange={e=>changeHandler("password",e.target.value)} value={data['password']} autoComplete='off' required/>
          </div>
  
          <div className='signup__display'>
            <button type='submit'  onClick={submit}>Register</button>
          </div>
  
          
             <Link className='login' to='/login'><div className='loginPage'>Login</div></Link>
          
  
  
        </form>
        
 
      
    )
}

// const Wrapper = styled.section`
// margin:3rem auto;
// width:120rem;
// display:flex;
// justify-content:center;
// .signup__form{
//     width: 30vw;
//     height: 77vh;
//     box-sizing: border-box;
    
//     display: flex;
//     flex-direction: column;
//     justify-content: left;
//     position: relative;
//     border:2px solid #614BC3;
//     border-radius: 10px;
//     background-color: #614BC3;
// }
// .signup__form h1{
//     padding-left: 5vw;
//     margin-bottom:3rem;
//     color: white;
//     letter-spacing: 4px;
//     font-size: 3rem;
//     border-left: 10px solid white;
   
// }
// .signup__display{
//     padding:0 5vw;
//     display: flex;
//     margin-top: 2vh;
//     flex-direction: column;
//     justify-content: space-between;
//     height: 50vh;
//     position: relative; 
// }
// .signup__display input{
//     width: 20vw;
//     height: 6vh;
//     color: white;
//     border: transparent;
//     background-color: transparent;
//     border-bottom: 2px solid lightgray;
//     font-size: 3em;
//     z-index: 1;
//     outline: none;
// }
// .signup__display span{
//     position: absolute;
//     left: 5vw;
//     top: 1vh;
//     font-size: 3rem;
//     color: white;

// }

// /* .signup__display input:focus{

//     border-bottom: 2px solid white;
//     outline: none;
//     z-index: 1;
// } */

// .signup__display input:focus + span , .signup__display input:not(:placeholder-shown)+span{
//     font-size: 2rem;
//     top: -3.5vh;
//     color: white;
//     transition: 0.5s;
// }


// .signup__display button{
//     height: 8vh;
//     width: 15vw;
//     margin: auto;
//     font-size: 2.5rem;
//     color:#614BC3;
//     padding: 5px 0;
//     background-color: white;
//     border:2px solid white;
//     border-radius: 30px;
// }
// .loginPage{
   
//     color: white;
//     font-size: 30px;
//     position: absolute;
//     right: 40px;
//     top: 30px;
//     text-align: center; 
//     border-radius: 50%;
    
// }

// @media only screen and (max-width: ${({ theme }) => theme.media.mobile}){
//     width:80vw;
//     .signup__form{
//         width: 80vw;
//         height: 70vh;
//     }
//     .signup__form h1{
//         padding-left: 8vw;
        
//     }
//     .signup__display{
//         margin-top: 20px;
//         padding: 0 8vw;
//     }
//     .signup__display span{
//         left: 8vw;
//     }
//     .signup__display button{
//         height: 10vh;
//         width: 50vw;
//         font-size:3rem; 
//     }
//     .loginPage{
//        right: 20px;
//     }
//     .signup__display input{
//         width: 50vw;
//     }
// }

// @media only screen and (max-width : ${({theme})=>theme.media.tab}) and (min-width : 540px){
//     width:80vw;
//     .signup__form{
//         width: 70vw;
//         height: 70vh;
//     }
//     .signup__form h1{
//         padding-left: 8vw;
//     }
//     .signup__display{
//         margin-top: 2vh;
//         padding: 0 8vw;
//         height: 20vh;
//     }
//     .signup__display span{
//         left: 8vw;
//         font-size:3.5rem;
//     }
   
//     .loginPage{
//         right: 20px;
//     }
//     .signup__display input{
//         width: 50vw;
//         font-size:4rem;
//     }
//     .signup__display input:focus + span , .signup__display input:not(:placeholder-shown)+span{
//         font-size:3rem; 
//     }
//     .signup__display button{
//         height: 10vh;
//         width: 50vw;
//         font-size:4.5rem;
//         border-radius:10rem;
//     }
// }


// `
export default Register
