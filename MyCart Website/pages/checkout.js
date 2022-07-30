import React from 'react'
import { AiFillPlusCircle,AiFillMinusCircle } from 'react-icons/ai';
import Link from 'next/link';
import { BsHandbag } from 'react-icons/bs';
import { useState,useEffect } from 'react';

const Checkout = ({cart,subTotal,addToCart,removeFromCart}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [pincode, setPincode] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [user, setUser] = useState({value:null})

  useEffect(() => {
    const user=JSON.parse(localStorage.getItem('myuser'))
    if(user && user.token){
      setUser(user)
      setEmail(user.email)
    }
  }, [])
  

  useEffect(() => {
    if(name && email && phone.length===10 && address && pincode.length===6 && Object.keys(cart).length!==0){
      setDisabled(false)
    }
  else{
      setDisabled(true)
    }

  }, [name,email,phone,address,pincode])
  

  const handleChange= async (e)=>{
    
      if(e.target.name=='name')
      {   
        setName(e.target.value)
      }
      else if(e.target.name=='phone')
      {
        setPhone(e.target.value)
      }
      else if(e.target.name=='address')
      {
        setAddress(e.target.value)
      }
      else if(e.target.name=='pincode')
      {
        setPincode(e.target.value)
        if(e.target.value.length==6){
          let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`)
          let pinJson= await pins.json()
          if(Object.keys(pinJson).includes(e.target.value))
          {
            setState(pinJson[e.target.value][1])
            setCity(pinJson[e.target.value][0])
          }
          else{
            setState('')
            setCity('')
          }
        }
        else{
          setState('')
          setCity('')
        }
      }
  }

  return (
    <div className='container m-auto'>
      <h1 className='font-bold text-center text-3xl my-8'>Checkout</h1>
      <h2 className='font-bold text-2xl mx-5'>Delivery Details</h2>
      <div className='mx-auto my-4'>
        <div className='px-2 w-1/2'>
          <div className="relative mb-4 mx-5">
            <label for="name" className="leading-7 text-sm text-gray-600">Name:</label>
            <input onChange={handleChange} value={name} type="text" id="name" name="name" className="w-[50vw] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter your name' />
          </div>
        </div>
        <div className='px-2 w-1/2'>
          <div className="relative mb-4 mx-5">
            <label for="email" className="leading-7 text-sm text-gray-600">Email:</label>
            {user && user.value ? <input value={user.email} type="email" id="email" name="email" className="w-[50vw] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter your email' readOnly /> : <input onChange={handleChange} value={email} type="email" id="email" name="email" className="w-[50vw] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter your email' />}
          </div>
        </div>
        <div className='px-2 w-1/2'>
          <div className="relative mb-4 mx-5">
            <label for="phone" className="leading-7 text-sm text-gray-600">Phone no:</label>
            <input onChange={handleChange} value={phone} type="number" id="phone" name="phone" className="w-[50vw] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter your number' />
          </div>
        </div>
        <div className='px-2 w-1/2'>
          <div className="relative mb-4 mx-5">
            <label for="address" className="leading-7 text-sm text-gray-600">Address:</label>
            <input onChange={handleChange} value={address} type="text" id="address" name="address" className="w-[50vw] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter your address' />
          </div>
        </div> 
        <div className='px-2 w-1/2'>
          <div className="relative mb-4 mx-5">
            <label for="pincode" className="leading-7 text-sm text-gray-600">Pincode:</label>
            <input onChange={handleChange} value={pincode} type="number" id="pincode" name="pincode" className="w-[50vw] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter your pincode' />
          </div>
        </div>
        <div className='px-2 w-1/2'>
          <div className="relative mb-4 mx-5">
            <label for="city" className="leading-7 text-sm text-gray-600">City:</label>
            <input value={city} onChange={handleChange} type="text" id="city" name="city" className="w-[50vw] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter your city' />
          </div>
        </div>
        <div className='px-2 w-1/2'>
          <div className="relative mb-4 mx-5">
            <label for="state" className="leading-7 text-sm text-gray-600">State:</label>
            <input value={state} onChange={handleChange} type="text" id="state" name="state" className="w-[50vw] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter your state' />
          </div>
        </div>

        <h2 className='font-semibold text-2xl mx-5'>Review Cart Items</h2>
        <div className='sideCart bg-pink-100 p-6 m-2'>
            <ol className='list-decimal font-semibold'>
              {Object.keys(cart).length==0 && <div className='my-4 font-normal'> Your cart is empty!</div>}
              {Object.keys(cart).map((k)=>{return <li key={k}>
                <div className='item flex my-3'>
                <div className=' font-semibold'> {cart[k].name}({cart[k].variant}/{cart[k].size}) </div>
                <div className='flex item-center justify-center font-semibold w-1/3 text-lg mt-2'><AiFillMinusCircle onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className='cursor-pointer text-pink-500'/><span className='mx-2 text-sm'>{cart[k].qty}</span><AiFillPlusCircle onClick={()=>{addToCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className='cursor-pointer text-pink-500'/></div>
                </div>
              </li>})}
            </ol>
            <span className='font-bold'>Subtotal:₹{subTotal}</span>
          </div>
          <div>
            <Link href="/checkout"><button disabled={disabled} className=" disabled:bg-indigo-300 flex mx-auto mt-3 text-white bg-indigo-600 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-md"><BsHandbag className='m-1'/>Proceed to Pay</button></Link>
          </div>

      </div>
    </div>
  )
}

export default Checkout