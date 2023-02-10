import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {ChakraProvider} from "@chakra-ui/react";
import Layout from "@/components/molecules/Layout";
import en from "../lang/en.json";
import es from "../lang/es.json";
import ru from "../lang/ru.json";
import {useRouter} from "next/router";
import {IntlProvider} from "react-intl";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()

const messages = {
  en,
  es,
  ru
}

function getDirection(locale: string) {
  if (locale === "ar") {
    return "rtl";
  }

  return "ltr";
}

export default function App({ Component, pageProps }: AppProps) {
  const { locale = "" } = useRouter();
  return (
      <ChakraProvider>
        {/*@ts-ignore*/}
        <IntlProvider locale={locale} messages={messages[locale]}>
          <QueryClientProvider client={queryClient}>
            <Layout>
              <Component {...pageProps} dir={getDirection(locale)} />
            </Layout>
          </QueryClientProvider>
        </IntlProvider>
      </ChakraProvider>
  );
}
