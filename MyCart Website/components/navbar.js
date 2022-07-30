import React, { useRef } from 'react'
import { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { BsCart4 } from 'react-icons/bs';
import { BsHandbag } from 'react-icons/bs';
import { MdAccountCircle } from 'react-icons/md';
import { AiFillCloseSquare,AiFillPlusCircle,AiFillMinusCircle } from 'react-icons/ai';
import { useRouter } from 'next/router';

const Navbar = ({logout,user,cart,addToCart,removeFromCart,clearCart,subTotal}) => {
  const [dropdown, setDropdown] = useState(false)
  const [sidebar, setSidebar] = useState(false)
  const router=useRouter

  useEffect(() => {
   Object.keys(cart).length!==0 && setSidebar(true)
   if(router.pathname=='/checkout'){
    setSidebar(false)
   }
  }, [])
  
  
  const toggleCart=()=>{
      setSidebar(!sidebar)
  }

  const ref=useRef()
  return (
    <>
    <span>
            {dropdown && <div onMouseOver={()=>{setDropdown(true)}} onMouseLeave={()=>{setDropdown(false)}} className='absolute top-14 right-16 w-36 py-2 px-5 rounded-md bg-pink-300 z-30'>
              <ul>
                <Link href={'/myaccount'}><a><li className='py-1 text-sm hover:text-pink-800 font-bold'>My Profile</li></a></Link>
                <Link href={'/myorder'}><a><li className='py-1 text-sm hover:text-pink-800 font-bold'>My Orders</li></a></Link>
                <li onClick={logout} className='py-1 text-sm hover:text-pink-800 font-bold'>Logout</li>
              </ul>
            </div>}
          </span>
    <div className={`sticky visible top-0 z-10 ${!sidebar && 'overflow-hidden'}`}>
      <header className="text-gray-800 body-font bg-slate-500">
        <div className="container mx-auto flex flex-wrap p-5 flex-col sm:flex-row md:flex-row items-center ">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 md:mx-5 mr-auto">
            <Image src="/logo1.jpg" alt='' width={100} height={50} />
            <span className="ml-3 text-xl to-gray-900">MyCart</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <a href='/' className="mr-4 hover:text-white">Home</a>
            <a href='#shopping' className="mr-4 hover:text-white">Explore Fashion</a>
            <a href='/contact' className="mr-4 hover:text-white">Contact us</a>
          </nav>
          <div  className='cart flex absolute top-5 right-0 mx-5 items-center cursor-pointer'>
            
          <div className='absolute'></div>
            {!user.value && <Link href={"/login"}><a>
              <button className='bg-indigo-500 text-sm rounded-md px-2 py-1 text-white mx-2 mt-1'>Login</button>
              </a></Link>}
            <span onMouseOver={()=>{setDropdown(true)}} onMouseLeave={()=>{setDropdown(false)}} >
            {user.value && <MdAccountCircle className='text-xl md:text-3xl mx-2 mt-1'/>}
            </span>
            <BsCart4 onClick={toggleCart} className='text-xl md:text-3xl'/>
          </div>
        </div>
      </header>
      {/* <div ref={ref} className={`sideCart absolute overflow-y-scroll w-72 h-[100vh] top-0 right-0 bg-pink-100 py-10 px-8 transition-transform ${Object.keys(cart).length !==0 ?'translate-x-0':'translate-x-full'}`}> */}
      <div ref={ref} className={`sideCart absolute overflow-y-scroll w-72 h-[100vh] top-0 bg-pink-100 py-10 px-8 transition-all ${sidebar ?'right-0':'-right-96'}`}>
            <h2 className='font text-2xl text-center'>Shopping Cart</h2>
            <span onClick={toggleCart} className='absolute top-5 right-2 cursor-pointer text-2xl text-pink-500'><AiFillCloseSquare/></span>
            <ol className='list-decimal font-semibold'>
              {Object.keys(cart).length==0 && <div className='my-4 font-normal'> Your cart is empty!</div>}
              {Object.keys(cart).map((k)=>{return <li key={k}>
                <div className='item flex my-3'>
                <div className='w-2/3 font-semibold'> {cart[k].name}({cart[k].variant}/{cart[k].size}) </div>
                <div className='flex item-center justify-center font-semibold w-1/3 text-lg my-1'><AiFillMinusCircle onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className='cursor-pointer text-pink-500'/><span className='mx-2 text-sm'>{cart[k].qty}</span><AiFillPlusCircle onClick={()=>{addToCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className='cursor-pointer text-pink-500'/></div>
                </div>
              </li>})}
            </ol>
            <div className='font-bold my-3'>Subtotal:₹{subTotal}</div>
            <div className='flex'>
            <Link href="/checkout"><button disabled={Object.keys(cart).length===0} className="flex mx-auto mt-3 text-white bg-pink-600 border-0 py-2 px-2 focus:outline-none  disabled:bg-pink-300 hover:bg-indigo-600 rounded text-md"><BsHandbag className='m-1'/>Check Out</button></Link>
            <button onClick={clearCart} disabled={Object.keys(cart).length===0} className="flex mx-auto mt-3  text-white bg-pink-600 border-0 py-2 px-2 focus:outline-none disabled:bg-pink-300 hover:bg-indigo-600 rounded text-md">Clear Cart</button>
            </div>
            
          </div>
    </div>
  </>  
  )
}

export default Navbar