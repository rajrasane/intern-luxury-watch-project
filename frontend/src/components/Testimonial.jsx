import profileLeeDoe from '../assets/images/profile-lee-doe.png';
import testimonialWatch from '../assets/images/testimonial-watch.png';
import { useTranslation } from "react-i18next";

const Testimonial = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#fcfcfc] dark:bg-[#1f1f1f] pt-16 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        {/* Text Content */}
        <div className="lg:w-1/2 z-10 mt-8 lg:mt-0">

          {/* Quote Icon */}
          <div className="mb-6">
            <div className="w-12 h-10 bg-white dark:bg-[#292929] flex items-center justify-center rounded shadow-[0px_4px_12px_0px_rgba(51,51,51,0.1)] transition-colors duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M10 8H6L5.5 13H8.5V18H3.5V12L4.5 8H10V8ZM20.5 8H16.5L16 13H19V18H14V12L15 8H20.5V8Z" className="fill-black dark:fill-white transition-colors duration-300" />
                </g>
              </svg>
            </div>
          </div>

          {/* Review Text */}
          <p className="font-roboto font-normal text-base leading-relaxed text-[#595959] dark:text-[#bfbfbf] mb-8 transition-colors duration-300">
            {t("testimonial.review")}
          </p>

          {/* Date */}
          <p className="font-roboto font-medium text-base text-[#2e2e2e] dark:text-[#f2f2f2] mb-8 transition-colors duration-300">
            {t("testimonial.date")}
          </p>

          {/* Profile */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-[#292929] overflow-hidden transition-colors duration-300">
              <img
                src={profileLeeDoe}
                alt={t("testimonial.altProfile")}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-roboto font-medium text-base text-[#2e2e2e] dark:text-[#f2f2f2] transition-colors duration-300">
                {t("testimonial.name")}
              </h4>
              <p className="font-roboto font-normal text-sm text-[#595959] dark:text-[#bfbfbf] transition-colors duration-300">
                {t("testimonial.role")}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-6">
            <button className="w-8 h-8 bg-white dark:bg-[#292929] flex items-center justify-center shadow-[0px_4px_12px_0px_rgba(51,51,51,0.1)] hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.41 18.41L12 17L7.41 12.41L12 7.83L13.41 9.24L10.24 12.41L13.41 18.41Z" className="fill-black dark:fill-white transition-colors duration-300" />
              </svg>
            </button>
            <button className="w-8 h-8 bg-white dark:bg-[#292929] flex items-center justify-center shadow-[0px_4px_12px_0px_rgba(51,51,51,0.1)] hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.59 18.41L12 17L16.59 12.41L12 7.83L10.59 9.24L13.76 12.41L10.59 18.41Z" className="fill-black dark:fill-white transition-colors duration-300" />
              </svg>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
          {/* Background Rectangle */}
          <div className="absolute right-0 top-0 w-full h-full bg-[#efbe8a] rounded-none z-0 transform translate-x-6 -translate-y-6 md:translate-x-12 md:-translate-y-12 hidden md:block" style={{ width: '450px', height: '450px', left: 'auto', top: '-40px' }}></div>

          <div className="relative z-10 w-full max-w-[350px] md:max-w-[450px] aspect-square bg-gray-100 dark:bg-[#333] transition-colors duration-300">
            <img
              src={testimonialWatch}
              alt={t("testimonial.altWatch")}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <hr className='text-gray-400 mt-10'></hr>

    </section>
  );
};

export default Testimonial;
