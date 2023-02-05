import '../index.css'

function Card(props) {
  return (
    <div className='m-6 drop-shadow-2xl text-slate-800 hover:text-gray-300 h-[130px] w-bg-gradient-to-r from-green-400 to-blue-400 max p-6 cursor-pointer rounded-2xl hover:from-emerald-500 hover:to-indigo-500 ...'>
       <h1 className='text-3xl font-extrabold'>{props.title}</h1>
       <h1 className='text-2xl'>{props.value}</h1>
    </div>
  );
}

export default Card;
