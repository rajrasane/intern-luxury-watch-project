import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Navigation = () => {
    const { t } = useTranslation();

    // Helper to scroll to section if on home page
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="flex gap-6 items-center">
            <Link to="/" onClick={() => window.scrollTo(0,0)} className="hover:text-gray-600 dark:text-white dark:hover:text-gray-300">
                {t("home")}
            </Link>
            
            {/* Hash Links - Work best if we use <a> or a helper when on Home */}
            <a 
                href="/#collections" 
                onClick={(e) => {
                    // If we are already on home, scroll smooth
                    if (window.location.pathname === '/') {
                        e.preventDefault();
                        scrollToSection('collections');
                    }
                }}
                className="hover:text-gray-600 dark:text-white dark:hover:text-gray-300 cursor-pointer"
            >
                Collections
            </a>

            <a 
                href="/#new-arrivals"
                 onClick={(e) => {
                    if (window.location.pathname === '/') {
                        e.preventDefault();
                        scrollToSection('new-arrivals');
                    }
                }}
                className="hover:text-gray-600 dark:text-white dark:hover:text-gray-300 cursor-pointer"
            >
                New Arrivals
            </a>

            <a 
                href="/#about"
                 onClick={(e) => {
                    if (window.location.pathname === '/') {
                        e.preventDefault();
                        scrollToSection('about');
                    }
                }}
                className="hover:text-gray-600 dark:text-white dark:hover:text-gray-300 cursor-pointer"
            >
                Brand Story
            </a>
        </nav>
    );
};

export default Navigation;
