import { useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import ThemeToggle from "./ThemeToggle";
import { useTranslation } from "react-i18next";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 🌍 Language hook
    const { i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#1f1f1f] shadow-md transition-colors duration-300">
            <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-4">
                {/* Logo */}
                <Logo />

                {/* Desktop Navigation */}
                <div className="hidden md:block">
                    <Navigation />
                </div>

                {/* Right side icons */}
                <div className="flex items-center gap-4 relative">
                    {/* Cart */}
                    <button className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                        🛒
                    </button>

                    {/* 🌐 Language Selector */}
                    <div className="relative group">
                        <button className="px-3 py-1 rounded-md border text-sm hover:bg-gray-200 dark:hover:bg-gray-700">
                            🌐 Language
                        </button>

                        {/* Dropdown */}
                        <div
                            className="absolute right-0 mt-2 w-44 bg-white dark:bg-[#1f1f1f]
              border border-gray-200 dark:border-gray-700 rounded-md shadow-lg
              opacity-0 invisible group-hover:opacity-100 group-hover:visible
              transition-all duration-200 z-50"
                        >
                            {[
                                ["en", "English"],
                                ["hi", "हिंदी"],
                                ["mr", "मराठी"],
                                ["ta", "தமிழ்"],
                                ["te", "తెలుగు"],
                                ["kn", "ಕನ್ನಡ"],
                                ["ml", "മലയാളം"],
                                ["bn", "বাংলা"],
                                ["gu", "ગુજરાતી"],
                                ["pa", "ਪੰਜਾਬੀ"],
                                ["ur", "اردو"],
                                ["es", "Spanish"],
                                ["fr", "French"],
                            ].map(([code, label]) => (
                                <button
                                    key={code}
                                    onClick={() => changeLanguage(code)}
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none flex items-center justify-center"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {isMenuOpen ? (
                                <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" className="text-black dark:text-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            ) : (
                                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" className="text-black dark:text-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-[#1f1f1f] shadow-lg">
                    <div className="px-4 py-4">
                        <Navigation />
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
