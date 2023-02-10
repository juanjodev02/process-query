import {useRouter} from "next/router";
import { useCookies } from "react-cookie"

/**
 * This hook is used to change the language of next js app
 */
export const useLanguage = () => {
  const { pathname, asPath, query, push } = useRouter();
  const [_, setLocal] = useCookies<"NEXT_LOCALE", {
    NEXT_LOCALE?: string;
}>(['NEXT_LOCALE']);

  const changeLanguage = async (language: string) => {
    await push({pathname, query}, asPath, {locale: language})
    setLocal('NEXT_LOCALE', language);
  }

  return {
    changeLanguage,
  };
};