import '../index.css'
import PatientInfo from './info'
import { useState } from 'react';
import { useEffect } from 'react';

import React from 'react'
import Patient from './Patient';



function AllPatients(){
    const [posts, setPosts] = useState([]);
    const [room, setRoom] = useState(0);
    const handleRoom = (e) => {
        setRoom(e.target.value);
      };

    useEffect(() => {
        console.log(room);
        fetch(`/patients/${room}`)
           .then((res) => res.json())
           .then((data) => {
            let arr=[];
            data.forEach((element) => {
                let str = '/dashboard'+'/'+element.personalInfo.Room+'/'+element.personalInfo.Bed;
                arr.push(
                    
                    <div className='m-5 border-2'>
                        
                        <a className='p-1 bg-green-400 text-whie' href={str}>View dashboard</a>
                        <PatientInfo obj={element}/>
        
                    </div>
                
                  )
                
            
            });
            
              setPosts(arr);
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, [room]);
        
         
         
    return(
        <div className='ml-[168px] mt-[10px] mr-[13px] p-1'>
            <div className='flex w-[400px] p-1 justify-center'>
            <label className='text-xl'>Filter: </label>
            <input onChange={handleRoom} value={room}  type="text" class="form-control block  w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " placeholder="Room No."/>
            
    
            </div>
           {posts.map((post) => {
               return (
                  
                  post
               );
            })}

        </div>
    )
}
export default AllPatients