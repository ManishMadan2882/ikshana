import '../index.css'

function Side() {
  return (
     <div id='side' class="w-max h-full p-1 shadow-md bg-gradient-to-r from-indigo-900 to-blue-900 fixed  z-10 mt-0 ">
     <h1 className='urbanFont inline text-xl m-2 text-blue-200 font-semibold '>
        Ikshana
        <p className="text-orange-300 inline text-3xl">+</p>

      </h1>
     <ul class="relative">
     <li class="relative">
       <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-100 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="/patients" data-mdb-ripple="true" data-mdb-ripple-color="dark">Patients</a>
      </li>
      <li class="relative">
       <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-100 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="/doctor" data-mdb-ripple="true" data-mdb-ripple-color="dark">Doctors</a>
      </li>
      <li class="relative">
       <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-100 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="/worker" data-mdb-ripple="true" data-mdb-ripple-color="dark">Health Workers</a>
     </li>
     <li class="relative">
       <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-100 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="/login" data-mdb-ripple="true" data-mdb-ripple-color="dark">Login</a>
    </li>
    <li class="relative">
       <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-100 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="https://chatapplication1.heymann.repl.co/" data-mdb-ripple="true" data-mdb-ripple-color="dark">Join Chat</a>
    </li>
   </ul>
 </div>
  );
}

export default Side;
