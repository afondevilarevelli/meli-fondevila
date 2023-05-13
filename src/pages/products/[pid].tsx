import { IProduct } from "@/models/product";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Divider,
  Flex,
  Icon,
  StackDivider,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Head from "next/head";
import productData from "@/data/product.json";
import { FaArrowRight } from "react-icons/fa";
import ProductDetails from "@/components/products/ProductDetails/ProductDetails";
import RelatedProducts from "@/components/products/RelatedProducts/RelatedProducts";
import ProductFeatures from "@/components/products/ProductFeatures";
import ProductDescription from "@/components/products/ProductDescription";
import BuySection from "@/components/products/BuySection/BuySection";
import SellerInfo from "@/components/products/SellerInfo/SellerInfo";
import QuestionsSection from "@/components/products/QuestionsSection/QuestionsSection";
import OpinionsSection from "@/components/products/OpinionsSection/OpinionsSection";
import { useEffect } from "react";
import { useProductContext } from "@/contexts/ProductContext";

type TProps = {
  prod: IProduct;
};

export default function ProductDetailsPage({ prod }: TProps) {
  const { product, setProduct } = useProductContext();

  const containerWidth = useBreakpointValue({
    base: "100%",
    ["2xl"]: "80%",
  });

  useEffect(() => {
    setProduct(prod);
  }, [prod]);

  if (!product) return <></>;

  return (
    <Box width={containerWidth} mx={"auto"}>
      <Head>
        <title>Producto</title>
        <meta name="description" content="Meli app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Text as="b" fontSize="sm">
        También puede interesarte: ....
      </Text>

      <Breadcrumb
        spacing="8px"
        fontSize="sm"
        mb={2}
        mt={4}
        separator={<Icon as={FaArrowRight} boxSize={2.5} />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Electrónica, Audio y Video</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Televisores</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Box
        bgColor={"white"}
        mx={"auto"}
        mb={6}
        py={3}
        px={4}
        borderRadius={"sm"}
      >
        <Flex gap={8}>
          <Box flex={1}>
            <VStack
              divider={
                <StackDivider
                  borderColor="gray.200"
                  marginEnd={"auto"}
                  marginStart={"auto"}
                  width={"90%"}
                />
              }
              spacing={4}
              align="stretch"
            >
              <ProductDetails />
              <>
                <Text fontSize={"2xl"} mb={6}>
                  Quienes vieron este producto también compraron
                </Text>
                <RelatedProducts />
              </>

              <>
                <Text fontSize={"2xl"} mb={6}>
                  Características
                </Text>
                <ProductFeatures />
              </>

              <>
                <Text fontSize={"2xl"} mb={6}>
                  Descripción
                </Text>
                <ProductDescription />
              </>
            </VStack>
          </Box>

          <Box width={"30%"}>
            <VStack spacing={6} align="stretch">
              <BuySection />
              <SellerInfo />
            </VStack>
          </Box>
        </Flex>

        <Divider my={8} />

        <Text fontSize={"2xl"} mb={6}>
          Preguntas y respuestas
        </Text>
        <QuestionsSection />

        <Divider my={8} />

        <Text fontSize={"2xl"} mb={6}>
          Opiniones del producto
        </Text>
        <OpinionsSection />
      </Box>
    </Box>
  );
}

export async function getServerSideProps({}) {
  return {
    props: {
      prod: productData,
    },
  };
}
