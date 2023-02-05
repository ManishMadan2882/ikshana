import '../index.css'
import PatientInfo from './info'


import React from 'react'




function AllPatients(){
    const patient = [{
        "name":"Adam Waheed",
        "personalInfo":{
            "gender":"M",
            "age":"45",
            "ailment":"Appenticitis",
            "department":"Gastro",
            "bloodGroup":"B+",
            "room":"209",
            "bed":"1",
            "Checkin":"19:15, 2/2/2023"
        },
        "reports":[
          {"title":"Weight","value":"58 kg"},
          {"title":"Temperature","value":"98.9 F"}
        ],
        "bloodPressure":[{"date":1675445852472,"value":188},{"date":1675459762472,"value":150},{"date":1675479872472,"value":123}],
        "records":
        [
            {
                "worker":"Ed Skye",
                "reason":"Measure blood pressure",
                "time":"00:59, 3/2/2023"
            },
            {
                "worker":"Davud A.",
                "reason":"Give tab Nucoxia",
                "time":"05:56, 3/2/2023"
            },
            {
                "worker":"Alex Z.",
                "reason":"Give ORS",
                "time":"13:25, 3/2/2023"
            }
      
        ],
        "doctors":["Dr. Ben Timberlee"]
      },
      {
        "name":"Steve Krotov",
        "personalInfo":{
            "gender":"M",
            "age":"32",
            "ailment":"Injury in Femur",
            "department":"Orthopaedic",
            "bloodGroup":"AB+",
            "room":"210",
            "bed":"1",
            "Checkin":"19:15, 2/2/2023"
        },
        "reports":[
          {"title":"Weight","value":"88 kg"},
          {"title":"Temperature","value":"100 F"}
        ],
        "bloodPressure":[{"date":1675445852472,"value":120},{"date":1675459762472,"value":134},{"date":1675479872472,"value":123}],
        "records":
        [
            {
                "worker":"Ted Norris",
                "reason":"Stiches",
                "time":"00:59, 3/2/2023"
            },
            {
                "worker":"Ifthkar",
                "reason":"Painkiller injection",
                "time":"05:56, 3/2/2023"
            },
            {
                "worker":"Ted Norris",
                "reason":"To measure temperature",
                "time":"13:25, 3/2/2023"
            }
      
        ],
        "doctors":["Dr.Manmohan Kumar"],
        
      
      },
      {
        "name":"Bob Odenkirk",
        "personalInfo":{
            "gender":"M",
            "age":"32",
            "ailment":"Hyperdiabetic",
            "department":"Gastro",
            "bloodGroup":"O+",
            "room":"211",
            "bed":"1",
            "Checkin":"19:15, 2/2/2023"
        },
        "reports":[
          {"title":"Weight","value":"112 kg"},
          {"title":"Temperature","value":"99.1 F"},
          {"title":"Blood Sugar","value":"203 mg"}
        ],
        "bloodPressure":[{"date":1675445852472,"value":112},{"date":1675459762472,"value":100},{"date":1675479872472,"value":123}],
        "records":
        [
            {
                "worker":"Ted Norris",
                "reason":"Measure Blood Sugar",
                "time":"00:59, 3/2/2023"
            },
            {
                "worker":"Ifthkar",
                "reason":"Inject Insulin",
                "time":"05:56, 3/2/2023"
            },
            {
                "worker":"Ted Norris",
                "reason":"To measure Blood pressure",
                "time":"13:25, 3/2/2023"
            }
      
        ],
        "doctors":["Dr.Manmohan Kumar"],
        
      
      }];
      let c=0,arr=[];
      patient.forEach((element)=>{
        
        arr.push(
            
            <div className='m-5 border-2'>
                
                <a className='p-1 bg-green-400 text-whie' href={"/dashboard/"+c++}>View dashboard</a>
                <PatientInfo obj={element}/>

            </div>
        
          )
      })
  
         
         
    return(
        <div className='ml-[168px] mt-[10px] mr-[13px] p-1'>
            
           {arr.map((post) => {
               return (
                  
                  post
               );
            })}

        </div>
    )
}
export default AllPatients