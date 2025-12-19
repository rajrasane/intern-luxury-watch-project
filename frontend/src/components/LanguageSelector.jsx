import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className="relative group">
            <button className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 text-sm hover:bg-gray-200 dark:hover:bg-gray-700">
                🌐 Language
            </button>

            <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-[#1f1f1f] border border-gray-200 dark:border-gray-700 rounded-md shadow-lg
                      opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                <button
                    onClick={() => changeLanguage("en")}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                    English
                </button>
                <button
                    onClick={() => changeLanguage("hi")}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                    हिंदी
                </button>
                <button
                    onClick={() => changeLanguage("mr")}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                    मराठी
                </button>
            </div>
        </div>
    );
};

export default LanguageSelector;
