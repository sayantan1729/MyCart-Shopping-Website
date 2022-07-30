import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>MyCart.com</title>
        <meta name="description" content="Shopping Cart" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

<section className="text-gray-600 body-font bg-green-200" >
  
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to Fashion World
      </h1>
      <p className="mb-8 leading-relaxed">Enjoy shopping and get anything you want in reasonable price</p>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="/home1.jpg" />
    </div>
  </div>
  </section>
    
  <section className="text-gray-600 body-font bg-pink-200">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Explore Your Fashion</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">The best deals on men's wear, women's wear, kid's wear, footwear, apparel, accessories & more from top brands. Shop the widest and latest collection at the biggest discounts on MyCart</p>
    </div>
    <div className="flex flex-wrap -m-4" id='shopping'>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="/img1.png" alt="content"/>
          <a href='/woman' className="text-lg text-gray-900 font-medium title-font mb-4">Women Fashion</a>
          <p className="leading-relaxed text-base">Shop the widest collection for women at the biggest discounts. Choose from a top range of casual ,ethnic and western styles at MyCart.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="/img2.png" alt="content"/>
          <a href='/man' className="text-lg text-gray-900 font-medium title-font mb-4">Men Fashion</a>
          <p className="leading-relaxed text-base">Shop from the latest collection of Apparels for Men Online. Choose from wide range of mens fashion apparels by top brands on MyCart.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="/img3.webp" alt="content"/>
          <a href='/kid' className="text-lg text-gray-900 font-medium title-font mb-4">Kid Fashion</a>
          <p className="leading-relaxed text-base">Online shopping for kids clothes in India at MyCart. Choose from a wide range of kids wear online at best price. kids online shopping in India.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="/img4.jpg" alt="content"/>
          <a href='/shoe' className="text-lg text-gray-900 font-medium title-font mb-4">Shoe</a>
          <p className="leading-relaxed text-base">Find the best deals on footwear, apparel, accessories & more from top brands like Woodland, Sparx, Reebook, Adidas, Nike,Campus at MyCart</p>
        </div>
      </div>
    </div>
  </div>
</section>
    
    </div>
  )
}
