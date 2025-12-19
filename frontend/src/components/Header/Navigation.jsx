import { useTranslation } from "react-i18next";

const Navigation = () => {
    const { t } = useTranslation();

    return (
        <nav className="flex gap-6">
            <a href="/">{t("home")}</a>
            <a href="/shop">{t("shop")}</a>
            <a href="/contact">{t("contact")}</a>
        </nav>
    );
};

export default Navigation;
