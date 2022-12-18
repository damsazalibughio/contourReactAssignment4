import { Link } from 'react-router-dom';
import webLogo from '../images/logo192.png';
import {useState} from 'react'
// import { useEffect } from 'react';
// import '../App.css';

function SignUp({profile, setProfile}) {
    // const [isSignUpError, setIsSignUpError] = useState(false)
    const [errorList, setErrorList] = useState([])
    const [profileData, setProfileData] = useState([{
        firstName:'',
        lastName:'',
        username:'',
        password:''
      }]) 
    
    const changeHandler = (event) =>{
        const {name, value} = event.target
    
        setProfileData( (prev) =>{
         return {...prev, [name]:value}
        })   
    }

    const register =  (event) =>{
        event.preventDefault();
        if(profileData.firstName && profileData.lastName  && profileData.username  && profileData.password ){

            const userExists = profile.filter((profile) => (profile.username === profileData.username))
            if(userExists.length > 0){
               
                setProfileData({
                    firstName:'',
                    lastName:'',
                    username:'',
                    password:''})
    
                    setErrorList([{error:true, message:'Email already Exists'}])
                // setErrorList({[errorList.error]:''})
            }else{
                setProfile([
                    {firstName:profileData.firstName, 
                    lastName:profileData.lastName,
                    username:profileData.username,
                    password:profileData.password},
                     ...profile]);
               
                setProfileData({
                    firstName:'',
                    lastName:'',
                    username:'',
                    password:''})
                    
                    setErrorList([{success:true, error:false, message:'You are successfully SignUp!'}])
            }
              
        }else{
            let errors = [];
            if(!profileData.firstName){
                errors.push({error:true, message: "First Name can't be empty"})
            }
            if(!profileData.lastName){
                errors.push({error:true, message: "Last Name can't be empty"})
            }
            if(!profileData.username){
                errors.push({error:true, message:"username can't be empty"})
            }
            if(!profileData.password){
                errors.push({error:true, message:"Password can't be empty"})
            }
            setErrorList(errors)
            // setIsSignUpError(true)
        }
           
    }
  return (
    <>
    <div className="wrapper">
        <div className="logo">
            <img src={webLogo} alt=""/>
        </div>
        <div className="text-center mt-4 name">
            React
        </div>
        <form className="p-3 mt-3" onSubmit={register}>
            <div className="form-field d-flex align-items-center">
                <span className="far firstName"></span>
                <input type="text" name="firstName"  placeholder="First Name"  value={profileData.firstName} onChange={changeHandler}/>
            </div>
            <div className="form-field d-flex align-items-center">
                <span className="far lastName"></span>
                <input type="text" name="lastName"  placeholder="Last Name" value={profileData.lastName} onChange={changeHandler}/>
            </div>
            <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input type="text" name="username"  placeholder="Username" value={profileData.username} onChange={changeHandler} required/>
            </div>
            <div className="form-field d-flex align-items-center">
                <span className="fas fa-key"></span>
                <input type="password" name="password"  placeholder="Password" value={profileData.password} onChange={changeHandler}/>
            </div>
            <button type='submit' className="btn mt-3">SignUp!</button>
        </form>
        <div className="text-center fs-6">
            <Link to="/login">Login</Link>
        </div>

        <ul className='errors-location'>
            {errorList.length > 0 && 
                errorList.map((errors, index) =>{
                return(
                    <li className='nav-link' key={index}>
                        <div className="toast-wrapper">
                            <div className={`r-toast ${errors.success ? 'success' : errors.error ? 'error' : ''} `}>
                                <div className="outer-container">
                                <i className={`bi ${errors.error ? 'bi-x-circle-fill' : 'bi-check-circle-fill'}`}></i>
                                </div>
                                <div className="inner-container">
                                    <p>{errors.error ? 'Error' : 'Success'}</p>
                                    <p>{errors.message}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                )
                })
             }
        </ul>
        
    </div>
    </>
  );
}

export default SignUp;
