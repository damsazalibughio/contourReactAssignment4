import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoutes = ({auth}) => {
    // const navigate = useNavigate()
    // let auth = {'token':false}
  return (
    auth ? <Outlet/> : <Navigate to='/login'/>
    // <Outlet/>
  )
}
