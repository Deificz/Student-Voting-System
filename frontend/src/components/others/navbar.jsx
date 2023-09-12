import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import { useAuth } from '../../utils/Auth';

export default function Nav() {
  
  const {logout} = useAuth();
  const [isAdmin, setIsAdmin] = useState(true);
  const [currentAuth, setCurrentAuth] = useState(true);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  
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

  const handleNav = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  return (
    <>
    <nav >
      <ul >
          <i className={`fa-solid fa-bars cursor-pointer text-2xl block md:hidden`} onClick={handleNav}></i>
          <div className={`grid grid-rows-[.5fr_1fr_2fr] md:flex md:flex-row items-center md:justify-between transition-all duration-300 max-[700px]:rounded-l-3xl
                          max-[700px]:justify-evenly max-[700px]:fixed max-[700px]:top-0 max-[700px]:h-[100%] 
                        max-[700px]:bg-white max-[700px]:border-color-blue max-[700px]:border-l-2 
                          max-[700px]:right-0 max-[700px]:pl-5 max-[700px]:text-2xl
                          ${isOpen ? 'max-[700px]:right-[0px]' : 'max-[700px]:right-[-150px]'}`} onClick={handleNav}>
            <i className="mr-3 text-3xl cursor-pointer fa-regular fa-circle-xmark md:hidden justify-self-end"></i>
            <div className='flex flex-col md:flex-row '>
                <Link to='/home'><li className='mr-10 font-semibold text-xl 2xl:text-3xl max-[700px]:mb-5'>Home</li></Link>
                {isAdmin ?
                <Link to='/dashboard'><li className='text-xl font-semibold 2xl:text-3xl'>Dashboard</li></Link>
                          :
                <Link to='/vote'><li className='text-xl font-semibold 2xl:text-3xl'>Vote</li></Link>}
            </div>
          <button onClick={handleSignout} type="button" className='mr-5 text-xl font-semibold 2xl:text-3xl'>Sign out</button>
          </div>
      </ul>
    </nav>
    
    
    </>
  )
}
