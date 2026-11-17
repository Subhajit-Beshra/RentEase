
import React, { useState } from 'react'
import { person1, person2, person3 } from '../assets/assets'

const Testimonals = () => {

  const testimonials = [
    {
      id: 1,
      review: "RentEase made furnishing my new apartment so much easier than I expected. I found beautiful furniture that perfectly matched my style without spending a huge amount of money. The entire experience felt convenient, flexible, and stress-free. I would definitely recommend RentEase to anyone looking to create a comfortable home.",
      image: person1,
      name: "Jack Luthar"
    },
    {
      id: 2,
      review: "I recently moved into a new city and needed furniture without making a long-term investment. RentEase turned out to be the perfect solution. Their collection has so many modern and stylish options, making it easy to find something for every corner of my home. I absolutely love the flexibility!",
      image: person2,
      name: "Arther Bias"
    },
    {
      id: 3,
      review: "I always thought decorating a beautiful home required spending a fortune, but RentEase changed my perspective. I could choose furniture that looked premium while keeping my budget under control. My living room now feels more welcoming and comfortable. It's a wonderful option for anyone who values both style and affordability.",
      image: person3,
      name: "Laila Sen"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    )
  }

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

  return (
    <div className='text-center py-16 px-5 overflow-hidden'>

      <h1 className='text-4xl font-bold mb-3'>
        Testimonials
      </h1>

      <p className='text-gray-500 mb-12'>
        What our happy customers say about RentEase.
      </p>

      {/* Slider container */}
      <div className='max-w-3xl mx-auto overflow-hidden'>

        {/* Slider track */}
        <div
          className='flex transition-transform duration-500 ease-in-out'
          style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}
        >

          {testimonials.map((testimonial) => (

            <div
              key={testimonial.id}
              className='min-w-full flex flex-col items-center justify-center px-6'
            >

              <p className='text-gray-500 text-base md:text-lg leading-8 mb-8'>
                "{testimonial.review}"
              </p>

              <img
                src={testimonial.image}
                className='w-20 h-20 rounded-full object-cover mb-3'
                alt={testimonial.name}
              />

              <h3 className='font-semibold text-xl'>
                {testimonial.name}
              </h3>

              <p className='text-gray-400 text-sm'>
                Happy Customer
              </p>

            </div>

          ))}

        </div>
      </div>

      {/* Navigation buttons */}
      <div className='flex justify-center items-center gap-6 mt-10'>

        <button
          onClick={handlePrev}
          className='w-11 h-11 rounded-full border border-gray-300 hover:bg-black hover:text-white transition'
        >
          ←
        </button>

        <button
          onClick={handleNext}
          className='w-11 h-11 rounded-full border border-gray-300 hover:bg-black hover:text-white transition'
        >
          →
        </button>

      </div>

      {/* Slider indicators */}
      <div className='flex justify-center gap-2 mt-6'>

        {testimonials.map((testimonial, index) => (

          <button
            key={testimonial.id}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? 'w-8 bg-black'
                : 'w-2 bg-gray-300'
            }`}
          />

        ))}

      </div>

    </div>
  )
}

export default Testimonals
