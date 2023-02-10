import { Container, Flex, FormControl, FormLabel, HStack, Select} from "@chakra-ui/react";
import Logo from "@/components/atoms/Logo";
import ThemeSwitch from "@/components/atoms/ThemeSwitch";
import React from "react";
import {useLanguage} from "@/hooks/useLanguage";
import {useRouter} from "next/router";

const  Header = (props: { bg: string, languageLabel: string }) => {
  const { locale } = useRouter();
  const { changeLanguage } = useLanguage();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => changeLanguage(e.target.value);

  return (
      <Flex bg={props.bg} h="100px" as="header">
        <Container maxW="container.xl">
          <Flex justifyContent="space-between" alignItems="center" h="100%">
            <Logo/>
            <HStack w="fit-content">
              <FormControl flexDir="row" display="flex" alignItems="center">
              <FormLabel>{props.languageLabel}</FormLabel>
              <Select onChange={handleChange} defaultValue={locale} variant="filled">
                <option value='es'>Es 🇪🇸</option>
                <option value='en'>En 🇺🇸</option>
                <option value='ru'>Ru 🇷🇺</option>
              </Select>
              </FormControl>
              <ThemeSwitch/>
            </HStack>
          </Flex>
        </Container>
      </Flex>
  );
}

export default Header;