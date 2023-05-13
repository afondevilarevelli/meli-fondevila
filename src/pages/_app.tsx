import Layout from "@/components/layout/Layout";
import "../styles/global.scss";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductProvider } from "@/contexts/ProductContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider>
        <ProductProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ProductProvider>
      </ChakraProvider>
    </>
  );
}
