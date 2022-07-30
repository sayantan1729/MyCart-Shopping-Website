// import React from 'react'
// import mongoose from 'mongoose'
// import Order from '../models/Order'
// import { useEffect } from 'react'
// import {useRouter} from 'next/router'

// const Myorder = () => {
//   const router=useRouter()
//   useEffect(() => {
//     if(!localStorage.getItem('token')){
//       router.push('/')
//     }
//   }, [])
//   return (
//     <div>
//       <h1 className='font-bold text-xl text-center py-4'>My Orders</h1>
//       <div className='container mx-auto'>
//         <div className="flex flex-col">
//           <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
//             <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
//               <div className="overflow-hidden">
//                 <table className="min-w-full">
//                   <thead className="border-b">
//                     <tr>
//                       <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
//                         #
//                       </th>
//                       <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
//                         First
//                       </th>
//                       <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
//                         Last
//                       </th>
//                       <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
//                         Handle
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr className="border-b">
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
//                       <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                         Mark
//                       </td>
//                       <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                         Otto
//                       </td>
//                       <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                         @mdo
//                       </td>
//                     </tr>
//                     <tr className="bg-white border-b">
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
//                       <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                         Jacob
//                       </td>
//                       <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                         Thornton
//                       </td>
//                       <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                         @fat
//                       </td>
//                     </tr>
//                     <tr className="bg-white border-b">
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
//                       <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                         Larry
//                       </td>
//                       <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                         Wild
//                       </td>
//                       <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                         @twitter
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export async function getServerSideProps(context) {
//   if (!mongoose.connections[0].readyState) {
//     await mongoose.connect(process.env.MONGO_URI)
//   }

//   let orders = await Order.find({})

//   return {
//     props: { orders: orders },
//   }

// }

// export default Myorder

import React from 'react'

const Myorder = () => {
  return (
    <div className='min-h-screen text-center text-lg font-semibold my-4'>No order has been placed yet!</div>
  )
}

export default Myorder