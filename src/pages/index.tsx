import { Button, Link } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Meli</title>
        <meta name="description" content="Meli app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href={"/products/1"} as={NextLink}>
        <Button colorScheme="blue">Go to product</Button>
      </Link>
    </>
  );
}
