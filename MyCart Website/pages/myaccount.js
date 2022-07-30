import React from 'react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { toast,ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Myaccount = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [user, setUser] = useState({ value: null })
  const [opassword, setOpassword] = useState('')
  const [cpassword, setCpassword] = useState('')
  const [npassword, setNpassword] = useState('')
  const router = useRouter()

  useEffect(() => {
    if (!localStorage.getItem('myuser')) {
      router.push('/')
    }

    const user=JSON.parse(localStorage.getItem('myuser'))
    if(user && user.token){
      setUser(user)
      setEmail(user.email)
      fetchData(user.token)
    }

  }, [])

  const fetchData=async (token)=>{
    let data={token:token}
      let a= await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateuser`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      let res= await a.json()
      setName(res.name)
      setPhone(res.phone)
      setAddress(res.address)
  }

  const handleUserSubmit= async () =>{
    const data={token:user.token,name,phone,address}
      let a= await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getuser`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      let res= await a.json()  
      
      toast.success('Successfully Updated Details!', {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
  }

  const handlePasswordSubmit= async () =>{
    let res;
    if(npassword==cpassword){
    let data={token:user.token,opassword,npassword,cpassword}
      let a= await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updatepassword`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      res= await a.json()  
    }
    else{
      res= {success:false}
    }
      
      if(res.success){
      toast.success('Successfully Updated Password!', {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      }
      else{
        toast.error('Password is not updated!', {
          position: "bottom-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }

      setOpassword('')
      setNpassword('')
      setCpassword('')
  }

  const handleChange = async (e) => {

    if (e.target.name == 'name') {
      setName(e.target.value)
    }
    else if (e.target.name == 'phone') {
      setPhone(e.target.value)
    }
    else if (e.target.name == 'address') {
      setAddress(e.target.value)
    }
    // else if (e.target.name == 'pincode') {
    //   setPincode(e.target.value)
    // }
    else if (e.target.name == 'opassword') {
      setOpassword(e.target.value)
    }
    else if (e.target.name == 'npassword') {
      setNpassword(e.target.value)
    }
    else if (e.target.name == 'cpassword') {
      setCpassword(e.target.value)
    }
  }


  return (
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <ToastContainer
position="bottom-left"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">My Account</h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details and Contact Details</p>
      </div>
      <div class="border-t border-gray-200">
        <dl>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Name</dt>
            <dd >
              <label for="name" className="leading-7 text-sm text-gray-600"></label>
              <input onChange={handleChange} value={name} type="text" id="name" name="name" className="w-[50vw] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='' />
            </dd>
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Email Address</dt>
            <dd>
              <label for="email" className="leading-7 text-sm text-gray-600"></label>
              {user && user.token ? <input value={user.email} type="email" id="email" name="email" className="w-[50vw] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='' readOnly />: <input onChange={handleChange} value={email} type="email" id="email" name="email" className="w-[50vw] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='' />}
            </dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Phone number:</dt>
            <dd>
              <label for="phone" className="leading-7 text-sm text-gray-600"></label>
              <input onChange={handleChange} value={phone} type="number" id="phone" name="phone" className="w-[50vw] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='' />
            </dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Address</dt>
            <dd>
              <label for="address" className="leading-7 text-sm text-gray-600"></label>
              <input onChange={handleChange} value={address}  type="text" id="address" name="address" className="w-[50vw] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='' />
            </dd>
          </div>
        </dl>
      </div>
      <button onClick={handleUserSubmit} className=" flex mx-auto m-3 text-white bg-indigo-600 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-md">Submit</button>

      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">Change Password</h3>
      </div>
      <div class="border-t border-gray-200">
        <dl>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500"> Enter old password</dt>
            <dd >
              <label for="opassword" className="leading-7 text-sm text-gray-600"></label>
              <input onChange={handleChange} value={opassword} type="password" id="opassword" name="opassword" className="w-[50vw] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='' />
            </dd>
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Enter new password</dt>
            <dd>
              <label for="npassword" className="leading-7 text-sm text-gray-600"></label>
              <input onChange={handleChange} value={npassword} type="password" id="npassword" name="npassword" className="w-[50vw] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='' />
            </dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Confirm password</dt>
            <dd>
              <label for="cpassword" className="leading-7 text-sm text-gray-600"></label>
              <input onChange={handleChange} value={cpassword} type="password" id="cpassword" name="cpassword" className="w-[50vw] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='' />
            </dd>
          </div>
        </dl>
      </div>
      <button onClick={handlePasswordSubmit} className=" flex mx-auto m-3 text-white bg-indigo-600 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-md">Submit</button>
    </div>

  )
}

export default Myaccount