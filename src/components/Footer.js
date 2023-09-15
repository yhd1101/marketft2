import React, {useContext} from 'react';
import {useTranslation} from "react-i18next";
import LocaleContext from "../LocaleContext";
import i18n from "../lang/i18n";

const Footer = () => {
    const { t } = useTranslation()
    const { locale } = useContext(LocaleContext)

    const ChangeLoclae = (l) => {
        if (locale !== l) {
            i18n.changeLanguage(l)
        }
    }

    const displayLanguage = (l) => {
        switch (l){
            case "ko-KR":
                return "한국어"
            case "en-US" :
                return "English"
            case "jp-JP" :
                return "日本語"
            case "cn-CN" :
                return "中国话"
            default:
                return ""
        }
    }

    return (
        <div className="jumbotron text-center mt-5 mb-0">
            <h3 className="text-secondary">{t("MainTitle")}</h3>
            <p>
                {t("korean market’s Homepage is powered by")} <span className="text-primary">{t("MainTitle")}</span> / Designed by <span
                className="text-primary">{t("MainTitle")}</span>
            </p>
        </div>
    );
};

export default Footer;