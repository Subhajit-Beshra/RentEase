import React from 'react'

const Description = () => {
  return (
    <div className='flex flex-col gap-10'>
        <div className='text-5xl font-bold'>
            <h1>Modern Interior</h1>
            <h1>Design Studio</h1>
        </div>
        <div className='flex flex-row items-center gap-5 text-xl'>
            <button className='bg-red-500 px-4 py-3 rounded-full cursor-pointer'>Shop Now</button>
            <button className='py-3 px-4 border border-white rounded-full cursor-pointer'>Explore</button>
        </div>
    </div>
  )
}

export default Description