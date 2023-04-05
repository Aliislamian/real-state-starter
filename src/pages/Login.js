import React from 'react'

export default function Login() {
  return (
   <>
    

 <div class="py-32 flex items-center">
   <div class="bg-white p-10 md:w-2/3 lg:w-1/2 mx-auto rounded">
     <form action="">

       <div class="flex items-center mb-5">
         <label for="name" class="w-24 inline-block text-right mr-4 text-gray-500 ">User Name</label>
         <input name="name" id="name" type="text" placeholder="Your name" class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"/>
       </div>

       <div class="flex items-center mb-10">
         <label for="password" class="w-20 inline-block text-right mr-4 text-gray-500 ">Password</label>
         <input type="password" name="password" id="password" placeholder="Your password" class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"/>
       </div>
       <div class="text-right">
         <button class="hover:bg-violet-800 bg-violet-700 text-white py-4 px-6 rounded-lg transition">Submit</button>
       </div>
     </form>
   </div>
 </div>


   </>
  )
}
