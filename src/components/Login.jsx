import React from 'react'
import { Link } from 'react-router-dom'
import webLogo from '../images/logo192.png'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";


export const Login = ({profile, setAuth, setShowHideLinks}) => {
    const navigate = useNavigate();
    
  
    const [isError, setIsError] = useState(false)
    const [profileAuthData, setProfileAuthData] = useState([{
        username:'',
        password:''
      }])
     

    const changeHandler = (event) =>{
        const {name, value} = event.target
    
        setProfileAuthData( (prev) =>{
         return {...prev, [name]:value}
        })   
    }

    // const [profileData] = profile
    const Authorize = (event) =>{
        event.preventDefault()
        
        let checkAuth = profile.filter((profileData) => profileData.username === profileAuthData.username && profileData.password ===profileAuthData.password)
        if(checkAuth.length > 0){
            const {username, firstName, lastName} = checkAuth[0]
            // console.log(username);
            setAuth(true)
            setShowHideLinks(true)
            navigate('/',{state:{username, firstName, lastName}})

        }else{
            console.log('unAuth');
            setAuth(false)
            setShowHideLinks(false)
            navigate('/login')
            setProfileAuthData({
                username:'',
                password:''
              })
              setIsError(true)
        }
    }
// console.log(profile[0].username);
  return (
    <div className="wrapper">
        <div className="logo">
            <img src={webLogo} alt=""/>
        </div>
        <div className="text-center mt-4 name">
            React
        </div>
        <form className="p-3 mt-3" onSubmit={Authorize}>
            <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input type="text" name="username" placeholder="Username" value={profileAuthData.username} onChange={changeHandler}/>
            </div>
            <div className="form-field d-flex align-items-center">
                <span className="fas fa-key"></span>
                <input type="password" name="password" placeholder="Password" value={profileAuthData.password} onChange={changeHandler}/>
            </div>
            <button className="btn mt-3">Login</button>
        </form>
        <div className="text-center fs-6">
            <Link to="/signUp">SignUp</Link>
           {isError ?  <div>Un-Authorize Login</div> : ''}
        </div>
    </div>
  )
}
