import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import { useAuth } from '../../utils/Auth';

export default function Nav() {
  
  const {logout} = useAuth();
  const [isAdmin, setIsAdmin] = useState(true);
  const [currentAuth, setCurrentAuth] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!currentAuth){
      navigate("/", { replace: true });
    }
  },[currentAuth, navigate])

  useEffect(() => {
    const userDataString = localStorage.getItem('userData');
    const userData = JSON.parse(userDataString);
    const [role]= userData.roles;
    
    if(role === 'ROLE_USER')
      setIsAdmin(false);
    else
      setIsAdmin(true)
  },[]);

  const handleSignout = async () =>{
    logout();
    setCurrentAuth(false);
  }

  return (
    <>
    <nav>
      <ul className='flex items-center justify-between'>
          <div className='flex'>
              <Link to='/home'><li className='mr-10 font-semibold text-xl 2xl:text-3xl'>Home</li></Link>
              {isAdmin ?
              <Link to='/dashboard'><li className='font-semibold text-xl 2xl:text-3xl'>Dashboard</li></Link>
                        :
              <Link to='/vote'><li className='font-semibold text-xl 2xl:text-3xl'>Vote</li></Link>}
          </div>
         <button onClick={handleSignout} type="button" className='mr-5 font-semibold text-xl 2xl:text-3xl'>Sign out</button>
      </ul>
    </nav>
    
    
    </>
  )
}
