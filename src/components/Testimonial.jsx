// src/components/Testimonial.jsx
import React from 'react';

const Testimonial = () => {
  return (
    <section className="bg-[#fcfcfc] py-16 relative overflow-hidden"> {/* Changed to light background */}
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="lg:w-1/2 z-10 mt-8 lg:mt-0"> {/* Removed text-white from here */}
          {/* Quote Icon */}
          <div className="mb-6">
            <div className="w-12 h-10 bg-white flex items-center justify-center rounded shadow-[0px_4px_12px_0px_rgba(51,51,51,0.1)]"> {/* Changed bg to white */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                   <path d="M10 8H6L5.5 13H8.5V18H3.5V12L4.5 8H10V8ZM20.5 8H16.5L16 13H19V18H14V12L15 8H20.5V8Z" fill="black"/> {/* Changed fill to black */}
                </g>
              </svg>
            </div>
          </div>

          {/* Review Text */}
          <p className="font-roboto font-normal text-base leading-relaxed text-[#595959] mb-8"> {/* Changed text color to dark gray */}
            They are the best watches that one acquires, also they are always with the latest news and trends, with a very comfortable price and especially with the attention you receive, they are always attentive to your questions.
          </p>

          <p className="font-roboto font-medium text-base text-[#2e2e2e] mb-8"> {/* Changed text color to dark gray */}
            March 27. 2021
          </p>

          {/* Profile */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden"> {/* Changed bg to gray-200 */}
               <img
                src="http://localhost:9001/assets/by-file-media-id/dceca7c4-6ded-8178-8007-3588fce7c337"
                alt="Lee Doe"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-roboto font-medium text-base text-[#2e2e2e]">Lee Doe</h4> {/* Changed text color to dark gray */}
              <p className="font-roboto font-normal text-sm text-[#595959]">Director of a company</p> {/* Changed text color to dark gray */}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-6">
            <button className="w-8 h-8 bg-white flex items-center justify-center shadow-[0px_4px_12px_0px_rgba(51,51,51,0.1)] hover:bg-gray-100 transition-colors"> {/* Changed bg to white */}
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.41 18.41L12 17L7.41 12.41L12 7.83L13.41 9.24L10.24 12.41L13.41 18.41Z" fill="black"/> {/* Changed fill to black */}
               </svg>
            </button>
            <button className="w-8 h-8 bg-white flex items-center justify-center shadow-[0px_4px_12px_0px_rgba(51,51,51,0.1)] hover:bg-gray-100 transition-colors"> {/* Changed bg to white */}
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.59 18.41L12 17L16.59 12.41L12 7.83L10.59 9.24L13.76 12.41L10.59 18.41Z" fill="black"/> {/* Changed fill to black */}
               </svg>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
           {/* Background Rectangle */}
           <div className="absolute right-0 top-0 w-full h-full bg-[#efbe8a] rounded-none z-0 transform translate-x-6 -translate-y-6 md:translate-x-12 md:-translate-y-12 hidden md:block" style={{ width: '450px', height: '450px', left: 'auto', top: '-40px' }}></div>
           
           <div className="relative z-10 w-full max-w-[350px] md:max-w-[450px] aspect-square bg-gray-100"> {/* Changed bg to gray-100 */}
             <img
                src="http://localhost:9001/assets/by-file-media-id/dceca7c4-6ded-8178-8007-3588fce7c339"
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