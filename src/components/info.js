import '../index.css'
import defImg from '../images/dp.jpg'
function PatientInfo(props){
    return(
        <div className="flex flex-wrap justify-evenly w-full">
        <div className=' rounded-2xl w-[30%] text-center p-2  drop-shadow-xl m-1'>
        <img src={defImg} alt="Profile" className='w-28 rounded-full inline drop-shadow-xl float-left'></img>
          <div className="float-right text-2xl py-3 text-left">
            <h1 className='font-bold'>Patient</h1>
            <h1>{props.obj.name}</h1>
          </div> 
           
        </div>


        <table className="text-left personal">
            <tr>
                <th>Age</th>
                <td>{props.obj.personalInfo.age}</td>
            </tr>
            <tr>
                <th>Gender</th>
                <td>{props.obj.personalInfo.gender}</td>
            </tr>
            <tr>
                <th>Blood Group</th>
                <td>{props.obj.personalInfo.bloodGroup}</td>
            </tr>
            <tr>
                <th>Ailment</th>
                <td>{props.obj.personalInfo.ailment}</td>
            </tr>
        </table>
        <table className="text-left personal" >
            <tr>
                <th>Check-in</th>
                <td>{props.obj.personalInfo.Checkin}</td>
            </tr>
            <tr>
                <th>Department</th>
                <td>{props.obj.personalInfo.department}</td>
            </tr>
            <tr>
                <th>Room</th>
                <td>{props.obj.personalInfo.room}</td>
            </tr>
            <tr>
                <th>Bed</th>
                <td>{props.obj.personalInfo.bed}</td>
            </tr>
        </table>
      </div>
    );
}
export default PatientInfo;