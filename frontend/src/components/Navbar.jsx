
import React from 'react'
import { Link } from 'react-router-dom';
import { Search } from "lucide-react"
import { useClerk, UserButton, Show } from '@clerk/react';
import logo from "../../public/Logo.png";

const Navbar = () => {

  const { openSignIn } = useClerk();

  return (
    <div className='relative flex flex-row justify-between items-center py-5 px-10 text-white'>

      {/* Logo */}
      <Link to='/' className='flex items-center'>
        <img src={logo} alt='' className='w-14' />
        <h1 className='text-3xl font-bold'>RentEase</h1>
      </Link>

      {/* Center Navigation Links */}
      <div className='absolute left-1/2 -translate-x-1/2 flex items-center gap-5 outline-0'>
        <Link to='/category'>Category</Link>
        <Link to='/deals'>Deals</Link>
        <Link to='/delivery'>Delivery</Link>
        <Link to='/new'>New</Link>
      </div>

      {/* Search and Authentication */}
      <div className='flex items-center gap-4'>
        <div className='bg-white rounded-full text-black flex flex-row items-center p-2'>
          <Search stroke='gray' />
          <input type="text" placeholder='Search' className='outline-0' />
        </div>

        <Show when="signed-out">
          <button
            onClick={() => openSignIn()}
            className="border-2 border-rose-50 rounded p-2 cursor-pointer transition-all duration-300 hover:bg-rose-500 hover:border-rose-500 text-xl"
          >
            Sign in
          </button>
        </Show>

        <Show when="signed-in">
          <UserButton appearance={{
            elements: {
              avatarBox: "w-14 h-14 rounded-full border-2 border-rose-400 shadow-lg"
            }
          }} />
        </Show>
      </div>

    </div>
  )
}

export default Navbar
