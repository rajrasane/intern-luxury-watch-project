// src/components/Testimonial.jsx
import React from 'react';
import profileLeeDoe from '../assets/images/profile-lee-doe.png';
import testimonialWatch from '../assets/images/testimonial-watch.png';

const Testimonial = () => {
  return (
    <section className="bg-[#1f1f1f] py-16 relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="lg:w-1/2 text-white z-10">
          {/* Quote Icon */}
          <div className="mb-6">
            <div className="w-12 h-10 bg-[#292929] flex items-center justify-center rounded shadow-[0px_4px_12px_0px_rgba(51,51,51,0.1)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.94 4.03C3.94 4.03 24 19 24 19" stroke="transparent" /> {/* Placeholder for actual path if needed, mainly relying on fill */}
                <g>
                   <path d="M10 8H6L5.5 13H8.5V18H3.5V12L4.5 8H10V8ZM20.5 8H16.5L16 13H19V18H14V12L15 8H20.5V8Z" fill="white"/>
                </g>
              </svg>
            </div>
          </div>

          {/* Review Text */}
          <p className="font-roboto font-normal text-base leading-relaxed text-[#bfbfbf] mb-8">
            They are the best watches that one acquires, also they are always with the latest news and trends, with a very comfortable price and especially with the attention you receive, they are always attentive to your questions.
          </p>

          <p className="font-roboto font-medium text-base text-[#f2f2f2] mb-8">
            March 27. 2021
          </p>

          {/* Profile */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-[#292929] overflow-hidden">
               <img
                src={profileLeeDoe}
                alt="Lee Doe"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-roboto font-medium text-base text-[#f2f2f2]">Lee Doe</h4>
              <p className="font-roboto font-normal text-sm text-[#bfbfbf]">Director of a company</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-6">
            <button className="w-8 h-8 bg-[#292929] flex items-center justify-center shadow-[0px_4px_12px_0px_rgba(51,51,51,0.1)] hover:bg-gray-700 transition-colors">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.41 18.41L12 17L7.41 12.41L12 7.83L13.41 9.24L10.24 12.41L13.41 18.41Z" fill="white"/> {/* Placeholder approx path */}
                  <path d="M12.7071 17.2929L8.41421 13L12.7071 8.70711L14.1213 10.1213L11.2426 13L14.1213 15.8787L12.7071 17.2929Z" fill="white"/>
               </svg>
            </button>
            <button className="w-8 h-8 bg-[#292929] flex items-center justify-center shadow-[0px_4px_12px_0px_rgba(51,51,51,0.1)] hover:bg-gray-700 transition-colors">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.2929 17.2929L15.5858 13L11.2929 8.70711L9.87868 10.1213L12.7574 13L9.87868 15.8787L11.2929 17.2929Z" fill="white"/>
               </svg>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
           {/* Background Rectangle */}
           <div className="absolute right-0 top-0 w-full h-full bg-[#efbe8a] rounded-none z-0 transform translate-x-12 -translate-y-12 hidden lg:block" style={{ width: '450px', height: '450px', left: '100px', top: '-80px' }}></div>
           
           <div className="relative z-10 w-[450px] h-[450px] bg-gray-300">
             <img
                src={testimonialWatch}
                alt="Testimonial Watch"
                className="w-full h-full object-cover"
              />
           </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;