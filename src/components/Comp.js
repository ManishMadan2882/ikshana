import '../index.css'
import dp from '../images/doctor.png'
function Comp(props){
   return(
    <div className='w-full bg-gradient-to-r from-cyan-100 to-cyan-200   rounded-lg drop-shadow-xl flex justify-around mt-[16px] p-2'>
    <div className='w-32 text-center'>
    <img className='float-left w-32  rounded-full block'  src={dp} alt="avatar"></img>
     <span className='text-emerald-900' >{props.username}</span>
    </div>
    <div className='text-left mr-20'>
        <h1 className='text-3xl font-bold'>{props.name}</h1>
        <div className='w-96 text-slate-600 font-semibold'>{props.about}</div>
    </div>

    </div>
   );
}
export default Comp;
