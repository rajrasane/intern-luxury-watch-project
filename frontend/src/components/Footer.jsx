import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#fcfcfc] dark:bg-[#121212] border-t border-gray-200 dark:border-gray-800 pt-16 pb-8 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-16">

          {/* Our Information */}
          <div className="w-full lg:w-1/4">
            <h3 className="font-roboto font-medium text-xl text-[#2e2e2e] dark:text-white mb-6 transition-colors duration-300">
              {t("footer.ourInformation.title")}
            </h3>
            <p className="font-roboto font-normal text-base text-[#595959] dark:text-gray-400 leading-relaxed transition-colors duration-300 whitespace-pre-line">
              {t("footer.ourInformation.address")}
            </p>
          </div>

          {/* About Us */}
          <div className="w-full lg:w-1/6">
            <h3 className="font-roboto font-medium text-xl text-[#2e2e2e] dark:text-white mb-6 transition-colors duration-300">
              {t("footer.about.title")}
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="font-roboto font-normal text-base text-[#595959] dark:text-gray-400 hover:text-[#2e2e2e] dark:hover:text-white transition-colors">
                  {t("footer.about.supportCenter")}
                </a>
              </li>
              <li>
                <a href="#" className="font-roboto font-normal text-base text-[#595959] dark:text-gray-400 hover:text-[#2e2e2e] dark:hover:text-white transition-colors">
                  {t("footer.about.customerSupport")}
                </a>
              </li>
              <li>
                <a href="#" className="font-roboto font-normal text-base text-[#595959] dark:text-gray-400 hover:text-[#2e2e2e] dark:hover:text-white transition-colors">
                  {t("footer.about.aboutUs")}
                </a>
              </li>
              <li>
                <a href="#" className="font-roboto font-normal text-base text-[#595959] dark:text-gray-400 hover:text-[#2e2e2e] dark:hover:text-white transition-colors">
                  {t("footer.about.copyRight")}
                </a>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div className="w-full lg:w-1/6">
            <h3 className="font-roboto font-medium text-xl text-[#2e2e2e] dark:text-white mb-6 transition-colors duration-300">
              {t("footer.product.title")}
            </h3>
            <ul className="space-y-4">
              <li>{t("footer.product.roadBikes")}</li>
              <li>{t("footer.product.mountainBikes")}</li>
              <li>{t("footer.product.electric")}</li>
              <li>{t("footer.product.accessories")}</li>
            </ul>
          </div>

          {/* Social */}
          <div className="w-full lg:w-1/6">
            <h3 className="font-roboto font-medium text-xl text-[#2e2e2e] dark:text-white mb-6 transition-colors duration-300">
              {t("footer.social.title")}
            </h3>
            <div className="flex gap-4">
              {/* Facebook */}
              <a href="#" className="w-5 h-5 text-[#2e2e2e] dark:text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors">
                {/* SVG remains unchanged */}
              </a>
              {/* Twitter */}
              <a href="#" className="w-5 h-5 text-[#2e2e2e] dark:text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors">
                {/* SVG remains unchanged */}
              </a>
              {/* Instagram */}
              <a href="#" className="w-5 h-5 text-[#2e2e2e] dark:text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors">
                {/* SVG remains unchanged */}
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
          <div className="flex items-center justify-center gap-2 text-[#8c8c8c] dark:text-gray-500">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="currentColor" strokeWidth="1" />
                <path d="M6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8Z" fill="currentColor" />
              </g>
            </svg>
            <span className="font-roboto font-normal text-sm">{t("footer.rights")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
