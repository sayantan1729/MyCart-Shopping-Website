import React from 'react'
import Link from 'next/link'
import { useEffect,useState } from 'react'
import { useRouter } from 'next/router'

const Forgot = () => {
  const router=useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCpassword] = useState('')
  
  // useEffect(() => {
  //   if(localStorage.getItem('token')){
  //     router.push('/')
  //   }
  // }, [])

  const handleChange= async (e)=>{
    
    if(e.target.name=='email')
    {   
      setEmail(e.target.value)
    }
    if(e.target.name=='password')
    {
      setPassword(e.target.value)
    }
    if(e.target.name=='cpassword')
    {
      setCpassword(e.target.value)
    }
}

  const sendResetEmail= async ()=>{
    let data={email,sendMail:true}
    let a= await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgot`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    let res= await a.json()

    if(res.success){
      console.log("Success")
    }
    else{
      console.log("Error")
    }
  }

  const resetPassword= async ()=>{
    if(password==cpassword){
    let data={password,sendMail:false}
    let a= await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgot`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    let res= await a.json()

    if(res.success){
      console.log("Success")
    }
    else{
      console.log("Error")
    }

  }
}

  return (
    <div>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
       <div className="max-w-md w-full space-y-8">
    <div>
    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Recover your account</h2>
    </div>
    {router.query.token && <div>
      <form className="mt-8 space-y-6" method="POST">
      <input type="hidden" name="remember" value="true"/>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="password" className="sr-only">Enter new password</label>
          <input value={password} onChange={handleChange} id="password" name="password" type="password" autoComplete="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter new password"/>
        </div>
        <div>
          <label for="cpassword" className="sr-only">Confirm new password</label>
          <input value={cpassword} onChange={handleChange} id="cpassword" name="cpassword" type="password" autoComplete="cpassword" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Confirm new password"/>
        </div>
      </div>

      <div>
        <button disabled={password!== cpassword} onClick={resetPassword} type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-200">
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          </span>
          Confirm
        </button>
      </div>
    </form>
    </div>}
    {!router.query.token && 
    <form className="mt-8 space-y-6" method="POST">
      <input type="hidden" name="remember" value="true"/>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="email" className="sr-only">Enter email address</label>
          <input value={email} onChange={handleChange} id="email" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
        </div>
      </div>

      <div>
        <button onClick={sendResetEmail} type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          </span>
          Continue
        </button>
      </div>
    </form>}
  </div>
</div>
    </div>
  )
}

export default Forgot