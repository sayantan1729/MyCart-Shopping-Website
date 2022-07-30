import { useRouter } from 'next/router'
import { useState } from 'react' 
import product from '../../models/product'
import mongoose from 'mongoose'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Post = ({addToCart,Products,variants,buyNow}) => {
  console.log(Products,variants)
  
  const router = useRouter()
  const { slug } = router.query
  const [pin, setPin] = useState()
  const [service, setService] = useState()


  const checkServiceability=async()=>{
       let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`)
       let pinJson= await pins.json()
       if(Object.keys(pinJson).includes(pin)){
        setService(true)
        toast.success('Yay!Your pincode is serviceable', {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
       }
       else{
        setService(false)
        toast.error('Sorry!Your pincode is not serviceable', {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
       }
  }

  const onChangePin=(e)=>{
    setPin(e.target.value)
  }

  const [color,setColor]=useState(Products.color)
  const [size,setSize]=useState(Products.size)

  const refreshVariant= (newSize,newColor)=>{
       let url= `${process.env.NEXT_PUBLIC_HOST}/product/${variants[newColor][newSize]['slug']}`
       router.push(url)
  }

  return <>
  <section className="text-gray-600 body-font overflow-hidden">
  <ToastContainer
  position="bottom-center"
  autoClose={3001}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  />
  <div className="container px-5 py-16 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="" src={Products.img}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">{Products.category}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{Products.title}({Products.color}/{Products.size})</h1>
        <p className="leading-relaxed">{Products.desc}</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex">
            <span className="mr-3">Color</span>
            {Object.keys(variants).includes('Red') && Object.keys(variants['Red']).includes(size) && <button onClick={()=>{refreshVariant(size,'Red')}} className={`border-2 bg-red-700 rounded-full w-6 h-6 focus:outline-none ${color==='Red' ? 'border-black' : 'border-gray-300'}`}></button>}
            {Object.keys(variants).includes('Black') && Object.keys(variants['Black']).includes(size) && <button onClick={()=>{refreshVariant(size,'Black')}} className={`border-2 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none ${color==='Black' ? 'border-black' : 'border-gray-300'}`}></button>}
            {Object.keys(variants).includes('Blue') && Object.keys(variants['Blue']).includes(size) && <button onClick={()=>{refreshVariant(size,'Blue')}} className={`border-2 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none ${color==='Blue' ? 'border-black' : 'border-gray-300'}`}></button>}
            {Object.keys(variants).includes('Green') && Object.keys(variants['Green']).includes(size) && <button onClick={()=>{refreshVariant(size,'Green')}} className={`border-2 ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none ${color==='Green' ? 'border-black' : 'border-gray-300'}`}></button>}
            {Object.keys(variants).includes('Yellow') && Object.keys(variants['Yellow']).includes(size) && <button onClick={()=>{refreshVariant(size,'Yellow')}} className={`border-2 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none ${color==='Yellow' ? 'border-black' : 'border-gray-300'}`}></button>}
            {Object.keys(variants).includes('Peach') && Object.keys(variants['Peach']).includes(size) && <button onClick={()=>{refreshVariant(size,'Peach')}} className={`border-2 ml-1 bg-pink-700 rounded-full w-6 h-6 focus:outline-none ${color==='Peach' ? 'border-black' : 'border-gray-300'}`}></button>}
            {Object.keys(variants).includes('Pink') && Object.keys(variants['Pink']).includes(size) && <button onClick={()=>{refreshVariant(size,'Pink')}} className={`border-2 ml-1 bg-pink-400 rounded-full w-6 h-6 focus:outline-none ${color==='Pink' ? 'border-black' : 'border-gray-300'}`}></button>}
            {Object.keys(variants).includes('Gray') && Object.keys(variants['Gray']).includes(size) && <button onClick={()=>{refreshVariant(size,'Gray')}} className={`border-2 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none ${color==='Gray' ? 'border-black' : 'border-gray-300'}`}></button>}
          </div>
          <div className="flex ml-6 items-center">
            <span className="mr-3">Size</span>
            <div className="relative">
              <select value={size} onChange ={(e)=>{refreshVariant(e.target.value,color)}} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                {Object.keys(variants[color]).includes('S') && <option value={'S'}>S</option>}
                {Object.keys(variants[color]).includes('M') && <option value={'M'}>M</option>}
                {Object.keys(variants[color]).includes('L') && <option value={'L'}>L</option>}
                {Object.keys(variants[color]).includes('XL') && <option value={'XL'}>XL</option>}
                {Object.keys(variants[color]).includes('XXL') && <option value={'XXL'}>XXL</option>}
                {Object.keys(variants[color]).includes('4-6') && <option value={'4-6'}>4-6</option>}
                {Object.keys(variants[color]).includes('6-8') && <option value={'6-8'}>6-8</option>}
                {Object.keys(variants[color]).includes('8-10') && <option value={'8-10'}>8-10</option>}
                {Object.keys(variants[color]).includes('10-12') && <option value={'10-12'}>10-12</option>}
                {Object.keys(variants[color]).includes('12-14') && <option value={'12-14'}>12-14</option>}
                {Object.keys(variants[color]).includes('6 UK') && <option value={'6 UK'}>6 UK</option>}
                {Object.keys(variants[color]).includes('7 UK') && <option value={'7 UK'}>7 UK</option>}
                {Object.keys(variants[color]).includes('8 UK') && <option value={'8 UK'}>8 UK</option>}
                {Object.keys(variants[color]).includes('9 UK') && <option value={'9 UK'}>9 UK</option>}
                {Object.keys(variants[color]).includes('10 UK') && <option value={'10 UK'}>10 UK</option>}

              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">₹499</span>
          <button onClick={()=>{toast.success('Item added to cart!', {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });addToCart(slug,1,Products.price,Products.title,size,color)}} className="flex ml-3 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add to Cart</button>
          <button onClick={()=>{buyNow(slug,1,499,Products.title,size,color)}} className="flex ml-3 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Buy Now</button>
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
        <div className='pin flex mt-6 space-x-2 text-sm'>
          <input onChange={onChangePin} type="number" className='px-2 border-2 border-indigo-300 rounded-md' placeholder='Enter your Pincode'></input>
          <button onClick={checkServiceability} className='flex ml-3 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded'>Check</button>
        </div>

        {(service && service!=null) && <div className='text-green-800 text-sm mt-3'>
          yay! We deliver to this pincode
        </div>}

        {(!service && service!=null) && <div className='text-red-800 text-sm mt-3'>
          Sorry! We don,t deliver to this pincode
        </div>}
      
      </div>
    </div>
  </div>
</section>
  </>
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }

  let Products =await product.findOne({slug: context.query.slug})
  let variants=await product.find({title: Products.title,category:Products.category})
  
  let colorSizeSlug ={}
  for(let item of variants){
    if(Object.keys(colorSizeSlug).includes(item.color)){
      colorSizeSlug[item.color][item.size]= {slug: item.slug}
    }
    else{
      colorSizeSlug[item.color]={}
      colorSizeSlug[item.color][item.size]= {slug: item.slug}
    }
  }
  
  return {
    props: {Products: JSON.parse(JSON.stringify(Products)), variants: JSON.parse(JSON.stringify(colorSizeSlug))},
  }
  
}

export default Post