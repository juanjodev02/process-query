import {Container, Flex, Text, useColorModeValue} from "@chakra-ui/react";
import GovernmentLogo from "@/components/atoms/GovernmentLogo";
import React from "react";

const Footer = (props: { bg: string, address: string }) => {
  const textColor = useColorModeValue('gray.700', 'gray.200');
  return <Flex bg={props.bg} h="150px">
    <Container maxW="container.xl">
      <Flex justifyContent="space-between" alignItems="center" h="100%">
        <GovernmentLogo/>
        <Text color={textColor}>{props.address}</Text>
        <Flex>
          <Text color={textColor}>© 2021</Text>
        </Flex>
      </Flex>
    </Container>
  </Flex>;
};

export default Footer;
