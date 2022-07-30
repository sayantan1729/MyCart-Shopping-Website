import React from 'react'
import Link from 'next/link'
import product from '../models/product';
import mongoose from "mongoose";


const Kid = ({products}) => {
  return (
    <div>
    <section className="text-gray-600 body-font bg-blue-100">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {Object.keys(products).map((item)=>{

          return <Link passHref={true} key={products[item]._id} href={`/product/${products[item].slug}`}><div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative rounded overflow-hidden">
              <img alt="ecommerce" className="m-auto h-[40vh] md:h-[50vh] cursor-pointer shadow-lg" src={products[item].img}/>
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{products.category}</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
              <p className="mt-1">₹{products[item].price}</p>
              <div className="mt-1">
                {products[item].size.includes('4-6') && <span className='border border-gray-600 px-1 mx-1'>4-6</span>}
                {products[item].size.includes('6-8') && <span className='border border-gray-600 px-1 mx-1'>6-8</span>}
                {products[item].size.includes('8-10') && <span className='border border-gray-600 px-1 mx-1'>8-10</span>} 
                {products[item].size.includes('10-12') && <span className='border border-gray-600 px-1 mx-1'>10-12</span>}
                {products[item].size.includes('12-14') && <span className='border border-gray-600 px-1 mx-1'>12-18</span>}
              </div>
              <div className="mt-1">
              {products[item].color.includes('Red') && <button className="border-2 border-gray-300 bg-red-700 rounded-full w-6 h-6 focus:outline-none"></button>}
              {products[item].color.includes('Blue') && <button className="border-2 border-gray-300 bg-blue-700 rounded-full w-6 h-6 focus:outline-none"></button>}
              {products[item].color.includes('Black') && <button className="border-2 border-gray-300 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
              {products[item].color.includes('Purple') && <button className="border-2 border-gray-300 bg-purple-700 rounded-full w-6 h-6 focus:outline-none"></button>}
              {products[item].color.includes('Green') && <button className="border-2 border-gray-300 bg-green-700 rounded-full w-6 h-6 focus:outline-none"></button>}
              {products[item].color.includes('Pink') && <button className="border-2 border-gray-300 bg-pink-500 rounded-full w-6 h-6 focus:outline-none"></button>}
              {products[item].color.includes('Peach') && <button className="border-2 border-gray-300 bg-pink-700 rounded-full w-6 h-6 focus:outline-none"></button>}
              {products[item].color.includes('Yellow') && <button className="border-2 border-gray-300 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"></button>}
              {products[item].color.includes('Gray') && <button className="border-2 border-gray-300 bg-gray-500 rounded-full w-6 h-6 focus:outline-none"></button>}
              </div>
            </div>
          </div>
          </Link>})}
        </div>
      </div>
    </section>
  </div>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }

  let products = await product.find({category:"Kid's Wear"}) 
  let kid={}
    for(let item of products){
        if(item.title in kid)
        {
             if(!kid[item.title].color.includes(item.color) && item.availableQty>0){
                kid[item.title].color.push(item.color)
             }
             if(!kid[item.title].size.includes(item.size) && item.availableQty>0){
                kid[item.title].size.push(item.size)
             }
        }
        else{
            kid[item.title]=JSON.parse(JSON.stringify(item))
            if(item.availableQty>0)
            {
                kid[item.title].color=[item.color]
                kid[item.title].size=[item.size]

            }
            else{
              kid[item.title].color=[]
              kid[item.title].size=[]
            }
        }
    }

  return {
    props: {products: JSON.parse(JSON.stringify(kid))},
  }
}


export default Kid