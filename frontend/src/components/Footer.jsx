
import React from 'react'
import { Mail, Send } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {

  const navLinks = [
    "About us", "Services", "Blog",
    "Contact Us", "Support", "Knowledge base",
    "Livechat", "Jobs", "Our team",
    "Leadership", "Privacy policy"
  ];

  return (
    <footer className='px-6 md:px-16 py-12'>

      {/* Newsletter */}
      <div className='flex flex-col md:flex-row justify-between gap-6 border-b border-gray-300 pb-10'>

        <div className='flex items-center gap-2 text-xl'>
          <Mail className='text-gray-600' />
          <p className='text-gray-700 font-medium'>
            Subscribe to Newsletter
          </p>
        </div>

        <div className='flex flex-col sm:flex-row gap-3'>
          <input
            type="text"
            placeholder='Enter your name'
            className='border border-gray-300 p-3 rounded-xl outline-none'
          />

          <input
            type="email"
            placeholder='Enter your email'
            className='border border-gray-300 p-3 rounded-xl outline-none'
          />

          <button className='bg-red-400 p-3 rounded-xl flex justify-center items-center'>
            <Send className='text-white' />
          </button>
        </div>

      </div>

      {/* Footer content */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 py-10'>

        <div className='max-w-md'>
          <h1 className='text-3xl text-gray-800 font-semibold mb-4'>
            RentEase
          </h1>

          <p className='text-gray-500 leading-7'>
            RentEase makes furnishing your dream space simple,
            affordable, and hassle-free. We bring together a
            carefully selected collection of modern, stylish,
            and comfortable furniture that suits your lifestyle
            and budget.
          </p>
        </div>

        <div>
          <h2 className='font-semibold text-gray-800 mb-5'>
            Quick Links
          </h2>

          <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
            {navLinks.map((navLink) => (
              <Link
                key={navLink}
                to='/'
                className='text-gray-500 hover:text-red-400 transition'
              >
                {navLink}
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className='border-t border-gray-300 pt-6 text-center text-gray-500 text-sm'>
        © {new Date().getFullYear()} RentEase. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer;
