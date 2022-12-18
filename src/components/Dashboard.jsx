import React from 'react'
import {useLocation } from 'react-router-dom';

import '../App.css'

export const Dashboard = ({auth, setAuth}) => {
  
  const {state} = useLocation();
  const { username, firstName, lastName } = state; 

  return (
    <div className='container-dashboard'>
      <h1 className='mt-5'>Welcome {firstName } {lastName}</h1>
      <br />
      <div>Your User ID is {username }</div>
    </div>
  )
}

