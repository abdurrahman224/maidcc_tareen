import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowRight, ArrowLeft, Star } from "lucide-react";
import Container from "../../layout/Container";

import avatar1 from "../../img/avatar-1.webp";
import avatar2 from "../../img/avatar-2.webp";
import avatar3 from "../../img/avatar-3.webp";

const Review = () => {
  const reviews = [
    {
      id: 1,
      title: "Absolutely the Best Maid Hiring Service!",
      text: "Finding a trustworthy full-time maid felt overwhelming until I found this platform. The process was quick, the maid was experienced, and everything was handled professionally. I couldn't be happier with the service!",
      name: "Sarah M",
      email: "sarahm@gmail.com",
      rating: 4.8,
      avatar: avatar1,
    },
    {
      id: 2,
      title: "Reliable, Professional & Hassle-Free!",
      text: "I hired a part-time maid for my apartment, and the experience exceeded my expectations. The booking process was simple, and the maid arrived on time and did an excellent job. Highly recommended!",
      name: "Michael R",
      email: "michael.r@gmail.com",
      rating: 4.8,
      avatar: avatar2,
    },
    {
      id: 3,
      title: "Smooth Visa Process, Great Support!",
      text: "We hired a full-time maid through maids.cc and everything was handled perfectly — from the interview to the visa paperwork. The support team was responsive and professional throughout.",
      name: "Priya M",
      email: "priyam@gmail.com",
      rating: 4.9,
      avatar: avatar3,
    },
  ];

  return (
    <section className="my-5 animate-fade-in-up">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>

      <Container className="max-w-7xl bg-white rounded-2xl shadow-sm py-12 px-4 md:px-6">
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            grabCursor={true}
            autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            speed={800}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              1024: { slidesPerView: 2.6 },
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            className="pb-2"
          >
            <SwiperSlide className="h-auto">
              <div className="bg-[#F3EFE8] rounded-[24px] p-8 flex flex-col justify-between h-full min-h-[390px] text-left transition-all duration-500 hover:shadow-md">
                <div>
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 leading-[1.15] mb-6 font-[Poppins]">
                    Trusted by Hundreds of Families Across the UAE
                  </h2>
                  <p className="text-gray-500 text-base md:text-lg max-w-2xl">
                    See what our customers say about hiring a maid and
                    processing their maid visa with maids.cc.
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-10">
                  <button className="swiper-button-prev-custom w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer group">
                    <ArrowLeft className="w-4 h-4 stroke-[1.5] group-hover:-translate-x-0.5 transition-transform" />
                  </button>
                  <button className="swiper-button-next-custom w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer group">
                    <ArrowRight className="w-4 h-4 stroke-[1.5] group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </SwiperSlide>

            {reviews.map((review) => (
              <SwiperSlide key={review.id} className="h-auto">
                <div className="bg-[#f5f3f0] rounded-[24px] p-8 flex flex-col justify-between h-full min-h-[390px] text-left shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl group">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 leading-[1.2] mb-6 transition-colors duration-300 group-hover:text-[#ff4d00]">
                      {review.title}
                    </h3>
                    <p className="text-[14px] md:text-base text-gray-600 leading-relaxed">
                      {review.text}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-10">
                    <div className="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-md"
                      />
                      <div>
                        <p className="text-[15px] font-semibold text-gray-900 leading-tight">
                          {review.name}
                        </p>
                        <p className="text-[12px] text-gray-500">
                          {review.email}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="text-[14px] font-semibold text-gray-900">
                        {review.rating}
                      </span>
                      <div className="flex text-[#ff4d00]">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 fill-[#ff4d00] transition-transform duration-300 hover:scale-125"
                            style={{ transitionDelay: `${i * 50}ms` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Review;