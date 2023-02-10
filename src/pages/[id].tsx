import { getById } from "@/services/search.service";
import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Card,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  Skeleton,
  Text,
  useColorModeValue,
  VStack,
  Icon,
  SimpleGrid,
  Spinner,
  Center
} from "@chakra-ui/react";
import Head from "next/head";
import {useRouter} from "next/router";
import { useQuery } from "react-query";

const ProcessDetail = () => {
  const router = useRouter()
  const headerColor = useColorModeValue("gray.600", "gray.300");
  const gridGap = useColorModeValue(6, 6);
  const { id } = router.query

  const {
    data: process,
    isLoading: isProcessLoading,
  } = useQuery(['process', id], () => getById(id as string), {
    enabled: !!id,
  })

  return (
    <Container maxW="container.xl">
      <Head>
        <title>{id}</title>
      </Head>
      <HStack>
        <IconButton variant="ghost" aria-label="Back" icon={<ArrowBackIcon color={headerColor} h={8} w={8} />} onClick={() => router.back()} />
        <Skeleton isLoaded={!isProcessLoading}>
          <Heading as="h1" color={headerColor}>Process Nro. {process?.id}</Heading>
        </Skeleton>
      </HStack>
      <Card mt={"2em"} p="10" variant="outline">
        <SimpleGrid columns={[1,1,2]} gap={6}>
          <GridItem w="100" display="flex" gap={2} alignItems={["flex-start","flex-start","center"]} flexDir={["column", "column", "row"]}>
            <Text>Número de proceso:</Text>
            <Skeleton fadeDuration={1} w="70%" h={5} isLoaded={!isProcessLoading}>
              <Text fontWeight="black">{process?.processNumber}</Text>
            </Skeleton>
          </GridItem>
          <GridItem w="100%" display="flex" gap={2} alignItems={["flex-start","flex-start","center"]} flexDir={["column", "column", "row"]}>
            <Text>Actor/ofendido:</Text>
            <Skeleton fadeDuration={1} w="70%" h={5} isLoaded={!isProcessLoading}>
              <Text fontWeight="black">{process?.plaintiff}</Text>
            </Skeleton>
          </GridItem>
          <GridItem w="100%" display="flex" gap={2} alignItems={["flex-start","flex-start","center"]} flexDir={["column", "column", "row"]}>
            <Text>Fecha de ingreso:</Text>
            <Skeleton fadeDuration={1} w="70%" h={5} isLoaded={!isProcessLoading}>
              <Text fontWeight="black">{process?.plaintiff}</Text>
            </Skeleton>
          </GridItem>
          <GridItem rowSpan={2} w="100%" display="flex" gap={2} alignItems={["flex-start","flex-start","center"]} flexDir={["column", "column", "row"]}>
            <Text>Demandado/procesado:</Text>
            <Skeleton fadeDuration={1} w="70%" h={5} isLoaded={!isProcessLoading}>
              <Text fontWeight="black">{process?.defendant}</Text>
            </Skeleton>
          </GridItem>
          <GridItem w="100%" display="flex" gap={2} alignItems={["flex-start","flex-start","center"]} flexDir={["column", "column", "row"]}>
            <Text>Infracción:</Text>
            <Skeleton fadeDuration={1} w="70%" h={5} isLoaded={!isProcessLoading}>
              <Text fontWeight="black">{process?.infraction}</Text>
            </Skeleton>
          </GridItem>
          <GridItem w="100%" display="flex" gap={2} alignItems={["flex-start"]} flexDir={["column", "column", "row"]}>
            <Text>Dependencia:</Text>
            <Skeleton fadeDuration={1} w="70%" h="fit-content" isLoaded={!isProcessLoading}>
              <Text fontWeight="black">{process?.jurisdictionDependency}</Text>
            </Skeleton>
          </GridItem>
          <GridItem w="100%" display="flex" gap={2} alignItems={["flex-start"]} flexDir={["column", "column", "row"]}>
            <Text>No. de ingreso:</Text>
            <Skeleton fadeDuration={1} w="70%" h={5} isLoaded={!isProcessLoading}>
              <Text fontWeight="black">1</Text>
            </Skeleton>
          </GridItem>
        </SimpleGrid>
      </Card>
      <Heading mt={"2em"} color={headerColor}>Actuaciones judiciales</Heading>
      {
        isProcessLoading  ? (
          <Center my={"1em"}>
            <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='blue.500'
              size='xl'
            />
          </Center>
        ) : (
          <>
            <Accordion mt={"2em"} allowMultiple>
              {
                process?.actions.map((action) => (
                  <AccordionItem key={action.id}>
                    <Heading as="h2">
                      <AccordionButton>
                        <Skeleton w="100%" h={5} isLoaded={!isProcessLoading} textAlign='left'>
                          <Box as="span" flex='1' textAlign='left' fontWeight="black" color={headerColor} fontSize={'1rem'}>
                            {action.title}
                          </Box>
                        </Skeleton>
                        <AccordionIcon />
                      </AccordionButton>
                    </Heading>
                    <AccordionPanel>
                      <Grid templateColumns={'repeat(12, 1fr)'} gap={gridGap}>
                        {
                        action.history.map((history, index) => (
                          <>
                            <GridItem colSpan={[12,12,2]}>
                              <VStack alignItems="flex-start">
                                <Text>{history.date}</Text>
                                <Badge colorScheme="green">{history.badgeLabel}</Badge>
                              </VStack>
                            </GridItem>
                            <GridItem rowSpan={1} position="relative" display={["none", "none", "flex"]} alignContent="flex-start">
                              <Icon h={25} w={25} viewBox='0 0 200 200' color='gray.600'>
                                <path
                                  fill='currentColor'
                                  d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                                />
                              </Icon>
                              {
                                index !== action.history.length - 1 && (
                                  <Box
                                    position="absolute"
                                    top={2.5}
                                    left={3}
                                    bottom={(-(gridGap + 2))}
                                    w={0.5}
                                    bg="gray.600"
                                  />
                                )
                              }
                            </GridItem>
                            <GridItem colSpan={[12, 12, 9]} key={history.id}>
                              <Card p="10" variant="outline" w="100%">
                                <Text textAlign="justify">{history.content}</Text>
                              </Card>
                            </GridItem>
                          </>
                        ))
                        }
                      </Grid>
                    </AccordionPanel>
                  </AccordionItem>
                ))
              }
            </Accordion>
          </>
        )
      }
    </Container>
  );
};

export default ProcessDetail;