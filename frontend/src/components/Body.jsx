import React from 'react';
import products, { returns, shopping, support, truck } from "../assets/assets.js";
import { furniture, lamp, desk, tool } from "../../public/public.js"
import Testimonals from './Testimonals.jsx';
import Footer from './Footer.jsx';



const Body = () => {

    const details = [
        {
            icon: truck,
            title: "Fast & Free Shipping",
            desc: "Enjoy fast and free shipping on every order, delivered straight to your doorstep with care and convenience."
        },
        {
            icon: shopping,
            title: "Easy to Shop",
            desc: "Discover your favourite furniture with a simple, smooth, and convenient shopping experience. Find the perfect pieces for your home with just a few clicks.",
        },
        {
            icon: support,
            title: "24/7 Support",
            desc: "Have questions or need assistance? Our dedicated support team is always available to help you with orders, products, and anything else you need."
        },
        {
            icon: returns,
            title: "Hassle Free Returns",
            desc: "Not completely satisfied with your purchase? No worries! Enjoy a simple and stress-free return process designed to make your shopping experience worry-free."
        }
    ];

    return (
        <div className='mx-50 my-20'>
            <div className='flex flex-row justify-between gap-20'>
                <div className='flex flex-col gap-10 max-w-3xl'>
                    <div className='text-3xl font-semibold'>
                        <h1>Crafted with</h1>
                        <h1>excellent material.</h1>
                    </div>
                    <div>
                        <p className='text-gray-500'>
                            Every piece is carefully selected using high-quality materials, combining durability, comfort, and timeless aesthetics to elevate your living space.
                        </p>
                    </div>
                    <div>
                        <button className='text-xl py-3 px-5 bg-black rounded-full text-white'>Explore</button>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    {products.slice(0, 3).map((product) => (
                        <div key={product.id} className="flex flex-col gap-3 cursor-pointer">

                            <div className="w-full h-100 overflow-hidden rounded-xl">
                                <img
                                    className="w-full h-full object-cover"
                                    src={product.image}
                                    alt={product.name}
                                />
                            </div>

                            <h2 className="font-semibold text-lg">
                                {product.name}
                            </h2>

                            <h2 className='text-center font-semibold text-lg'>${product.price}</h2>

                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-50 flex flex-row items-center gap-10'>
                <div className='max-w-3xl'>
                    <div>
                        <h1 className='text-3xl font-bold'>Why choose us</h1>
                        <br />
                        <p className='text-gray-500'>We bring together quality, comfort, and timeless design to make your home beautiful. Premium furniture, honest prices, and a better shopping experience.</p>
                    </div>
                    <div className='mt-10 grid grid-cols-2 grid-rows-2 gap-10'>
                        {details.map((detail) => (
                            <div className='flex flex-col gap-3'>
                                <img src={detail.icon} alt="" className='w-11 bg-gray-200 p-3 rounded-full' />
                                <h2 className='text-xl'>{detail.title}</h2>
                                <p className='text-gray-500'>{detail.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-150 h-150'>
                    <img src={furniture} alt="" className='w-full h-full rounded-3xl' />
                </div>
            </div>
            <div className="mt-50 grid grid-cols-2 items-center gap-20">

                {/* Left Side - Images */}
                <div className="flex justify-center gap-5">

                    {/* Desk Image */}
                    <div className="w-1/2">
                        <img
                            src={desk}
                            alt="Modern furniture"
                            className="w-full h-[420px] object-cover rounded-2xl"
                        />
                    </div>

                    {/* Lamp Image */}
                    <div className="w-1/2 mt-54">
                        <img
                            src={lamp}
                            alt="Modern interior lamp"
                            className="w-full h-[420px] object-cover rounded-2xl"
                        />
                    </div>

                </div>

                {/* Right Side - Content */}
                <div className="flex flex-col gap-7">

                    <span className="text-sm uppercase tracking-[0.3em] text-gray-400 font-medium">
                        Interior Design Studio
                    </span>

                    <div className="text-4xl font-bold leading-tight text-gray-900">
                        <h1>We Help You Make</h1>
                        <h1>Modern Interior Design.</h1>
                    </div>

                    <p className="text-gray-500 leading-8 text-base">
                        We believe great spaces tell stories. Through bold ideas,
                        thoughtful craftsmanship, and refined aesthetics, we
                        transform everyday interiors into timeless expressions
                        of style, comfort, and individuality.
                    </p>

                    <button className="bg-black text-white rounded-full px-8 py-4 w-fit
                     hover:bg-gray-800 transition-all duration-300 cursor-pointer">
                        Explore More →
                    </button>

                </div>

            </div>
            <div className='mt-50'>
                <Testimonals/>
            </div>
            <div className='mt-50'>
                <Footer/>
            </div>
        </div>
    )
}

export default Body