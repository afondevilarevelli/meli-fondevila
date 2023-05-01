import Layout from "@/components/layout/Layout";
import AuthProvider from "@/contexts/AuthContext";
import "../styles/global.scss";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider>
        <AuthProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </ChakraProvider>
    </>
  );
}
