import '../index.css'
function Todo(){
    return(
        <div>
<div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans text-white">
	<div class="bg-gradient-to-r from-violet-500 to-blue-400  rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div class="mb-4">
            <h1 class="text-grey-darkest">Todo List</h1>
            <div class="flex mt-4 opacity-80">
                <input class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-900 " placeholder="Add Todo"/>
                <button class="flex-no-shrink p-2 border-2 rounded text-teal-300 border-teal-300 hover:text-white hover:bg-teal-500">Add</button>
            </div>
        </div>
        <div>
            <div class="flex mb-4 items-center">
                <p class="w-full text-grey-darkest">Add another component to Tailwind Components</p>
                <button class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-400 border-green-400 hover:bg-green-400">Done</button>
                <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-red-400 border-red-400 hover:text-white hover:bg-red-400">Remove</button>
            </div>
          	
        </div>
    </div>
</div>


        </div>
    );
}
export default Todo