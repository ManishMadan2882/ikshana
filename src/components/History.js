import '../index.css'

function History(props) {
  const res=[];
  props.obj.forEach(element => {
    res.push(
    <tr>
    <th>{element.time}</th>
    <th>{element.worker}</th>
    <th>{element.reason}</th>
    </tr>
    );
  });
  return (
    <div>   
    <h1 className="rounded-t-xl text-center text-white py-2 font-semibold bg-gradient-to-r from-violet-600 to-blue-600 ">Visit Information</h1>
  <table>
  <tr className='bg-gradient-to-r from-violet-600 to-blue-600  text-white '>
    <th>Time</th>
    <th>Visiting Staff</th>
    <th>Visit Reason</th>
     
  </tr>
  {res}

  
</table>    
    </div>
  );
}

export default History;
