import React from 'react'

const Order = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order Id: #85473</h1>
        <p className="leading-relaxed mb-4">Your order has been successfully placed</p>
        <div className='flex'>
        <div class="flex flex-col border-t border-gray-200 py-2 mx-3">
          <span class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Item Description</span>
          <span className="mx-auto text-gray-900 my-4 text-sm">T-shirt(XL/Black)</span>
          <span className="mx-auto text-gray-900 my-4 text-sm">Shirt(L/Grey)</span>
          <span className="mx-auto text-gray-900 my-4 text-sm">Saree(Red)</span>
        </div>
        <div className="flex flex-col border-t border-gray-200 py-2 mx-3">
          <span class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Quantity</span>
          <span className="mx-auto text-gray-900 my-4 text-sm">1</span>
          <span className="mx-auto text-gray-900 my-4 text-sm">1</span>
          <span className="mx-auto text-gray-900 my-4 text-sm">1</span>
        </div>
        <div className="flex  flex-col border-t border-gray-200 py-2 mx-3">
         <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Item Total</a>
          <span className="mx-auto text-gray-900 my-4 text-sm">₹499</span>
          <span className="mx-auto text-gray-900 my-4 text-sm">₹699</span>
          <span className="mx-auto text-gray-900 my-4 text-sm">₹999</span>
        </div>
        </div>
        <div className="flex mt-3">
          <span className="title-font font-medium text-2xl text-gray-900">SubTotal:₹1999</span>
          <button className="flex mx-6 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Track Order</button>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Order