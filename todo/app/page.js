
"use client"
import Todo from "@/components/Todo";
import { useState } from "react";

export default function Home() {
   const [formdata,setformdata]=useState({
    title:"",
    description:""
  })

  const onchangeHandler=(e)=>{
 const name=e.target.name
 const value=e.target.value
 setformdata(form=>({...form,[name]:value}))
 console.log(formdata)
  }
  const onsubmitHandler=(e)=>{
e.preventDefault();


  }
  return (
   <>
   <form onSubmit={onsubmitHandler} className=" flex flex-col items-start gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto">
<input  value={formdata.title} onChange={onchangeHandler} type="text"  placeholder="Enter title" name="title" className=" border-2 px-3 py-2 w-full"/>
<textarea value={formdata.description} onChange={onchangeHandler} name="description" id="" placeholder="Enter description" className="border-2 px-4 py-3 w-full"></textarea>
<button  className="px-3 py-2 bg-red-500 border-2 text-white w-[200px]  outline-none rounded-xl">Submit</button>
   </form>
   

<div className="relative overflow-x-auto w-[80%] mx-auto mt-24">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Title
                </th>
                <th scope="col" className="px-6 py-3">
                    Description
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
            </tr>
        </thead>
        <tbody>
           <Todo/>
        </tbody>
    </table>
</div>

   </>
  );
}
