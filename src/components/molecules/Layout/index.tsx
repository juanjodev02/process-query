import React from "react";
import Header from "@molecules/Header";
import Footer from "@molecules/Footer";
import {Box, useColorModeValue, VStack} from "@chakra-ui/react";
import {useIntl} from "react-intl";

const Layout = (props: {
  children: React.ReactNode
}) => {
  const backgroundColor = useColorModeValue('gray.50', 'gray.700')
  const intl = useIntl();

  const address = intl.formatMessage({ id: "page.home.address" }, {
    address: "12 de Octubre N24-563 y Francisco Salazar"
  });

  const languageLabel = intl.formatMessage({ id: "page.home.languageLabel" });

  return (
      <VStack
        minH="100vh"
        spacing={4}
        align='stretch'
        justifyContent="space-between">
        <Header bg={backgroundColor} languageLabel={languageLabel}/>
        <Box flex="1" paddingTop="1em" paddingBottom="1em">
          {props.children}
        </Box>
        <Footer bg={backgroundColor} address={address}/>
      </VStack>
  );
}

export default Layout;