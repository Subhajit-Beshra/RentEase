import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const reviews = [
  {
    id: 1,
    name: "Ananya Sharma",
    role: "Interior Designer",
    review:
      "Beautiful furniture with excellent quality. It completely transformed my living room!",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    role: "Customer",
    review:
      "Amazing shopping experience. The furniture looks premium and delivery was smooth.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 3,
    name: "Priya Das",
    role: "Customer",
    review:
      "I love the design and attention to detail. Definitely worth the price!",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=44",
  },
];

const Testimonals = () => {
  return (
    <section className="py-20 px-6 bg-[#f8f7f3]">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
            Testimonials
          </p>
          <h2 className="text-4xl font-bold mt-3">
            What Our Customers Say
          </h2>
          <p className="text-gray-500 mt-4">
            Real experiences from people who love our furniture.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={25}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-14"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-white p-8 rounded-2xl shadow-sm min-h-[280px]">
                <div className="text-yellow-500 text-xl mb-5">
                  {"★".repeat(review.rating)}
                </div>

                <p className="text-gray-600 leading-7">
                  "{review.review}"
                </p>

                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-semibold">
                      {review.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Testimonals;
