import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from 'react';
import { Login } from './components/Login';
import SignUp from './components/SignUp';
import { PageNotFound } from './components/PageNotFound';
import { Dashboard } from './components/Dashboard';
import Layout from './Layout';
import { PrivateRoutes } from './PrivateRoutes';
import { Todo } from './components/Todo';
import { Test } from './components/Test';
// import PrivateLayout from './PrivateLayout';
function App() {
  
  const [profile, setProfile] = useState([])
  const [showHideLinks, setShowHideLinks] = useState(false)
  const [auth, setAuth] = useState(false)
 
//  console.log(profileData);
  return (
       <>
        <BrowserRouter>
          <Routes>
           
            {/* <Route path="/" element={<PrivateLayout />}> */}
            {/* <Route element={<PrivateRoutes/>}>
               <Route index element={<Dashboard />} />
              </Route> */}
            {/* </Route> */}

            <Route path='/' element={<Layout showHideLinks={showHideLinks} setShowHideLinks={setShowHideLinks} setAuth={setAuth}/>}>
              <Route path='/login' element={<Login profile={profile} setProfile={setProfile} setAuth={setAuth}  setShowHideLinks={setShowHideLinks} />} />
              <Route path='/test' element={<Test/>} />
              <Route path="/signup" element={<SignUp profile={profile} setProfile={setProfile}  />}/>
              <Route element={<PrivateRoutes auth={auth}/>}>
               <Route index element={<Dashboard auth={auth} setAuth={setAuth} />} />
               <Route path='todo' element={<Todo/>} />
              </Route>
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
       </>
  );
}

export default App;
