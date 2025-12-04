// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#fcfcfc] pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-16">
          {/* Our Information */}
          <div className="w-full lg:w-1/4">
            <h3 className="font-roboto font-medium text-xl text-[#2e2e2e] mb-6">Our information</h3>
            <p className="font-roboto font-normal text-base text-[#595959] leading-relaxed">
              Omega Luxury Watches Shop No. 12, Ground Floor<br />
              DLF Emporio Mall, Vasant Kunj<br />
              New Delhi - 110070<br />
              India
            </p>
          </div>

          {/* About Us */}
          <div className="w-full lg:w-1/6">
            <h3 className="font-roboto font-medium text-xl text-[#2e2e2e] mb-6">About Us</h3>
            <ul className="space-y-4">
              <li><a href="#" className="font-roboto font-normal text-base text-[#595959] hover:text-[#2e2e2e] transition-colors">Support Center</a></li>
              <li><a href="#" className="font-roboto font-normal text-base text-[#595959] hover:text-[#2e2e2e] transition-colors">Customer Support</a></li>
              <li><a href="#" className="font-roboto font-normal text-base text-[#595959] hover:text-[#2e2e2e] transition-colors">About Us</a></li>
              <li><a href="#" className="font-roboto font-normal text-base text-[#595959] hover:text-[#2e2e2e] transition-colors">Copy Right</a></li>
            </ul>
          </div>

          {/* Product */}
          <div className="w-full lg:w-1/6">
            <h3 className="font-roboto font-medium text-xl text-[#2e2e2e] mb-6">Product</h3>
            <ul className="space-y-4">
              <li><a href="#" className="font-roboto font-normal text-base text-[#595959] hover:text-[#2e2e2e] transition-colors">Road bikes</a></li>
              <li><a href="#" className="font-roboto font-normal text-base text-[#595959] hover:text-[#2e2e2e] transition-colors">Mountain bikes</a></li>
              <li><a href="#" className="font-roboto font-normal text-base text-[#595959] hover:text-[#2e2e2e] transition-colors">Electric</a></li>
              <li><a href="#" className="font-roboto font-normal text-base text-[#595959] hover:text-[#2e2e2e] transition-colors">Accesories</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="w-full lg:w-1/6">
            <h3 className="font-roboto font-medium text-xl text-[#2e2e2e] mb-6">Social</h3>
            <div className="flex gap-4">
              {/* Facebook */}
              <a href="#" className="w-5 h-5 text-[#2e2e2e] hover:text-gray-600 transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.89 2.5H11.11C7.78 2.5 6.11 4.17 6.11 7.44V15H3.89V17.5H6.11V22.5H10.56V17.5H12.78L13.33 15H10.56V8C10.56 7.17 10.56 6.39 12.22 6.39H13.89V2.5Z"/> {/* Placeholder path */}
                </svg>
              </a>
              {/* Twitter */}
              <a href="#" className="w-5 h-5 text-[#2e2e2e] hover:text-gray-600 transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.05 3.35C17.33 3.67 16.55 3.88 15.74 3.98C16.57 3.48 17.2 2.69 17.5 1.75C16.72 2.21 15.86 2.55 14.96 2.73C14.22 1.94 13.17 1.45 12.03 1.45C9.84 1.45 8.07 3.23 8.07 5.42C8.07 5.73 8.1 6.03 8.17 6.32C4.88 6.15 1.95 4.58 0 2.18C-0.34 2.76 -0.54 3.44 -0.54 4.16C-0.54 5.54 0.16 6.75 1.22 7.46C0.57 7.44 -0.04 7.26 -0.57 6.97V7.02C-0.57 8.94 0.8 10.55 2.61 10.91C2.28 11 1.93 11.05 1.57 11.05C1.32 11.05 1.07 11.02 0.83 10.98C1.34 12.56 2.81 13.71 4.55 13.74C3.19 14.81 1.48 15.45 -0.37 15.45C-0.69 15.45 -1 15.43 -1.31 15.39C0.44 16.51 2.52 17.17 4.76 17.17C12.04 17.17 16.02 11.14 16.02 5.94C16.02 5.77 16.02 5.6 16.01 5.43C16.79 4.87 17.46 4.16 18.05 3.35Z"/> {/* Placeholder path */}
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-5 h-5 text-[#2e2e2e] hover:text-gray-600 transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.85 6.15C13.85 5.07 12.98 4.2 11.9 4.2H8.1C7.02 4.2 6.15 5.07 6.15 6.15V9.95C6.15 11.03 7.02 11.9 8.1 11.9H11.9C12.98 11.9 13.85 11.03 13.85 9.95V6.15ZM10 10.55C8.57 10.55 7.4 9.38 7.4 7.95C7.4 6.52 8.57 5.35 10 5.35C11.43 5.35 12.6 6.52 12.6 7.95C12.6 9.38 11.43 10.55 10 10.55ZM13.11 5.11C12.93 5.11 12.78 4.96 12.78 4.78C12.78 4.6 12.93 4.45 13.11 4.45C13.29 4.45 13.44 4.6 13.44 4.78C13.44 4.96 13.29 5.11 13.11 5.11ZM12.5 2.5H7.5C4.74 2.5 2.5 4.74 2.5 7.5V12.53C2.5 15.29 4.74 17.53 7.5 17.53H12.5C15.26 17.53 17.5 15.29 17.5 12.53V7.5C17.5 4.74 15.26 2.5 12.5 2.5ZM16.01 12.53C16.01 14.46 14.44 16.03 12.5 16.03H7.5C5.56 16.03 3.93 14.46 3.93 12.53V7.5C3.93 5.56 5.56 3.99 7.5 3.99H12.5C14.44 3.99 16.01 5.56 16.01 7.5V12.53Z"/> {/* Placeholder path */}
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-center gap-2 text-[#8c8c8c]">
             <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                   <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#8c8c8c" strokeWidth="1"/>
                   <path d="M6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8Z" fill="#8c8c8c"/>
                   <path d="M4.5 4.5C4.5 4.5 6.5 6.5 6.5 6.5" stroke="transparent"/>
                </g>
             </svg>
            <span className="font-roboto font-normal text-sm">Omega || All rigths reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;