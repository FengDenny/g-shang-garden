import { useTranslation } from "react-i18next";


export const translate = (translator:string)=> {
    const { t } = useTranslation();

    return  t(translator)
}

export const translateObjArr = (translator:string) => {
    const { t } = useTranslation();

    const translate: Array<Object> = t(translator, { returnObjects: true });

    return translate
}