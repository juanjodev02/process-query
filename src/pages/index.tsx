import {useIntl} from "react-intl";
import {Container, Heading, Text, useColorModeValue, VStack} from "@chakra-ui/react";
import ProcessQuerySearchBox from "@organisms/ProcessQuerySearchBox";
import {useMutation, useQuery} from "react-query";
import {searchByIdentityNumber} from "@/services/search.service";
import QueryResult from "@organisms/QueryResult";
import {District, getMatters, getStates, State} from "@/services/filter-data.service";
import {useRouter} from "next/router";
import Head from "next/head";

const parseQueryToArrayString = (query: object): string[] => {
  const queryArray = Object.entries(query);
  const queryArrayString = queryArray.map((item) => {
    return `${item[0]}=${item[1]}`;
  });
  return queryArrayString;
}

export default function Home() {
  const intl = useIntl();
  const textColor = useColorModeValue("gray.600", "gray.300");
  const captionColor = useColorModeValue("gray.600", "gray.300");

  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({ id: "page.home.head.description" });

  const router = useRouter();
  const searchDataType = router.query.type === 'identityNumber' || router.query.type === 'names' || router.query.type === 'processNumber';

  const {
    data: processesData,
    isLoading: processesIsLoading,
  } = useQuery([...parseQueryToArrayString(router.query)] ,() => searchByIdentityNumber(router.query.type as string, router.query as object), {
    enabled: searchDataType
  });

  const {
    mutate: processMutationWithFilters,
    isLoading: processesIsLoadingWithFilters,
  } = useMutation(searchByIdentityNumber);

  const {
    data: statesData = [],
    isLoading: statesIsLoading,
  } = useQuery('states', () => getStates(), {
    enabled: searchDataType
  });

  const {
    data: mattersData = [],
    isLoading: mattersIsLoading,
  } = useQuery('matters', () => getMatters(), {
    enabled: searchDataType
  })

  const onStateChange = (_: State) => {
    processMutationWithFilters('identityNumber');
  }

  const onStateUnselect = () => {
    processMutationWithFilters('identityNumber');
  }

  const onDistrictSelect = (_: State, __: District) => {
    processMutationWithFilters('identityNumber');
  }

  const onDistrictUnselect = () => {
    processMutationWithFilters('identityNumber');
  }

  const onMatterChange = (_: string) => {
    processMutationWithFilters('identityNumber');
  }

  const onSearchSubmit = async (type: 'identityNumber' | 'names' | 'processNumber', data: object) => {
    await router.push({
      pathname: '/',
      query: {
        type,
        ...data
      }
    }, undefined, { shallow: true })
  }

  return (
    <Container maxW="container.xl">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <VStack spacing="1em" alignItems="flex-start">
        <Heading as="h1" fontWeight="bold" fontSize='4xl' color={textColor}>{title}</Heading>
        <Text fontSize='md' color={captionColor}>{description}</Text>
        <ProcessQuerySearchBox isLoading={processesIsLoading} onSearchSubmit={onSearchSubmit}/>
        { searchDataType && <QueryResult
            isProcessLoading={processesIsLoadingWithFilters}
            onStateChange={onStateChange}
            onDistrictChange={onDistrictSelect}
            onDistrictUnselect={onDistrictUnselect}
            onStateUnselect={onStateUnselect}
            statesIsLoading={statesIsLoading}
            states={statesData}
            matters={mattersData}
            isMattersLoading={mattersIsLoading}
            onMatterChange={onMatterChange}
            data={processesData || []} />
        }
      </VStack>
    </Container>
  )
}
