import React from 'react'

const Todo = () => {
  return (
    <div>
         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1
                </th>
                <td className="px-6 py-4">
                      nextjs
                </td>
                <td className="px-6 py-4">
                    learning next js
                </td>
                <td className="px-6 py-4">
                    pending
                </td>
                <td className="px-6 py-4">
                <button className="px-3 py-2 border-white bg-red-400 text-rose-50 rounded-3xl"> Delete</button>
                <button className="px-3 py-2 bg-green-600 text-white rounded-3xl ">Done</button>
                </td>
            </tr>
    </div>
  )
}

export default Todo