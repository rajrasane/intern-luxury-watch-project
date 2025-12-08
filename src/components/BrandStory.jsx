import brandStory from '../assets/images/brand-story.png';

const BrandStory = () => {
  return (
    <section id='about' className="bg-[#fcfcfc] dark:bg-[#121212] pt-16 transition-colors duration-300">
      <hr className='text-gray-400 my-10'></hr>
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="mb-8">
            <h2 className="font-roboto font-medium text-base tracking-wider text-gray-700 dark:text-gray-300 inline-block relative pb-2 uppercase">
              OUR STORY
              <span className="absolute bottom-0 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 w-16 h-px bg-gray-700 dark:bg-gray-300"></span>
            </h2>
          </div>
          <h3 className="font-roboto font-normal text-3xl leading-snug text-[#2e2e2e] dark:text-white mb-6">
            Timeless Craftsmanship, Modern Excellence
          </h3>
          <p className="font-roboto font-normal text-base text-[#595959] dark:text-gray-400">
            For over a century, we have perfected the art of watchmaking—blending Swiss precision with contemporary design. Each timepiece is meticulously crafted by master artisans, using only the finest materials. Discover a legacy worn on the wrist.
          </p>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-72 h-72 bg-orange-400 p-6 flex items-center justify-center">
            <img
              src={brandStory}
              alt="Brand Story"
              className="max-w-full max-h-full object-cover relative z-10 -translate-x-4 -translate-y-4 shadow-xl"
            />
          </div>
        </div>
      </div>
      <hr className='text-gray-400 my-10'></hr>
    </section>
  );
};

export default BrandStory;