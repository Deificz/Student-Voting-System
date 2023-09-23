import React, { useEffect,useState } from 'react'
import { useCandidates } from '../../utils/Candidates';
import { Link } from 'react-router-dom';
export default function list_comp({position}) {

const {candidates, getCandidates, status} = useCandidates();
const [isAdmin, setIsAdmin] = useState(false);

useEffect(() => {
getCandidates();
const userData = JSON.parse(localStorage.getItem('userData'));
const [role]= userData.roles;
const boolAdmin = role === 'ROLE_ADMIN';
setIsAdmin(boolAdmin);
console.log(boolAdmin);
},[])


  return (
    <div className='w-[100dvw] h-[100dvh] flex flex-col items-center'>
            
            <div className={`mt-20 md:mt-14 md:border-b-2 border-color-blue w-10/12 pb-5 flex flex-col md:flex-row items-center md:items-end ${isAdmin ? 'justify-between' : 'justify-center'} text-3xl text-center 2xl:text-4xl`}>
                <h1>{position}</h1>
               {isAdmin && <button><i className="fa-solid fa-plus bg-white p-3 rounded-full text-black hover:text-white hover:bg-color-green hover:border-color-green border-4 border-color-green transition-all duration-300"></i></button>}
            </div>
            
            <div  id='candidate-panel' className='m-5 md:grid md:grid-cols-3 md:overflow-y-auto'>
            {status === 'Done' && 
            candidates.filter(person => person.rolename === position).map(candidate => (
                <div key={candidate.id} className='flex flex-col justify-evenly h-[300px] w-[230px] md:w-[300px] md:h-[300px] 2xl:w-[400px] 2xl:h-[400px] border-2 border-color-blue m-10 rounded-xl shadow-card hover:-translate-y-3 transition-all duration-300'>
                    {isAdmin && <button className='h-10 w-10 mr-3 self-end bg-color-red rounded-full text-gray-200 hover:text-black hover:bg-white hover:border-color-red border-4 border-white transition-all duration-300'><i className="fa-solid fa-minus"></i></button>}
                    <div className='flex items-center px-2'>
                        <div className='h-[80px] w-[80px] bg-black rounded-full text-white flex justify-center items-center'>Logo</div>
                        <h1 className='ml-5 font-semibold text-md md:text-xl 2xl:text-3xl'>{candidate.name} <span className=''><br />{candidate.partylist}</span></h1>
                    </div>
                    <p className='px-5 text-sm text-center md:text-lg 2xl:text-2xl'>{candidate.introduction}</p>
                    <Link to={`/home/candidate/${candidate.id}`}><h1 className='mr-5 text-xs font-bold text-right transition-all duration-300 cursor-pointer md:text-md 2xl:text-xl hover:text-color-blue'>View more..</h1></Link>   
                </div>
                ))}
            </div>
        </div> 
  )
}
