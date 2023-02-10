import {
  Card, Checkbox, CheckboxGroup,
  FormControl, FormLabel, Heading,
  HStack, Input, InputGroup, InputRightElement,
  Select,
  SimpleGrid,
  Skeleton, Stack,
  Text, useCheckboxGroup,
  useColorModeValue,
  VStack
} from "@chakra-ui/react";
import React, {FC, useState} from "react";
import {QueryResultProps} from "@organisms/QueryResult/types";
import {District, State} from "@/services/filter-data.service";
import {useClickable} from "@chakra-ui/clickable";
import {SearchIcon} from "@chakra-ui/icons";
import {useRouter} from "next/router";
import { useIntl } from "react-intl";


const QueryResult: FC<QueryResultProps> = ({
  data ,
  states,
  statesIsLoading,
  onStateChange,
  onStateUnselect,
  onDistrictUnselect,
  onDistrictChange,
  isProcessLoading,
  matters,
  onMatterChange,
  isMattersLoading
}) => {
  const router = useRouter();
  const intl = useIntl();
  const [state, setState] = useState<State | undefined>(undefined);
  const [district, setDistrict] = useState<District | undefined>(undefined);
  const { value, getCheckboxProps } = useCheckboxGroup({
  })

  const clickable = useClickable();
  const textColor = useColorModeValue("gray.600", "gray.300");
  const captionColor = useColorModeValue("gray.700", "gray.500");

  const resultTitle = intl.formatMessage({ id: "page.home.result.title" });
  const resultLengthLabel = intl.formatMessage({ id: "page.home.result.length" });
  const filterTitle = intl.formatMessage({ id: "page.home.filter.title" });
  const filterStateLabel = intl.formatMessage({ id: "page.home.filter.state" });
  const filterDistrictLabel = intl.formatMessage({ id: "page.home.filter.district" });
  const filterMatterLabel = intl.formatMessage({ id: "page.home.filter.matter" });
  const filterProcessNumberLabel = intl.formatMessage({ id: "page.home.filter.processNumber" });
  const filterRoleLabel = intl.formatMessage({ id: "page.home.filter.role" });
  const filterDefendantLabel = intl.formatMessage({ id: "page.home.filter.defendant" });
  const filterPlaintiffLabel = intl.formatMessage({ id: "page.home.filter.plaintiff" });
  const resultProcessNumberLabel= intl.formatMessage({ id: "page.home.result.processNumber" });
  const resultDateLabel = intl.formatMessage({ id: "page.home.result.date" });
  const resultInfractionLabel = intl.formatMessage({ id: "page.home.result.infraction" });
  const resultDefendantLabel = intl.formatMessage({ id: "page.home.result.defendant" });
  const resultPlaintiffLabel = intl.formatMessage({ id: "page.home.result.plaintiff" });

  const stateChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const state = states?.find((state) => state.value === e.target.value);
    if (!state) {
      onStateUnselect();
      onDistrictUnselect();
      setState(state);
      return;
    }
    onStateChange(state);
    setState(state);
  }

  const districtChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const district = state?.districts?.find((district) => district.value === e.target.value);
    if (!district) {
      onDistrictUnselect();
      setDistrict(district)
      return;
    }
    onDistrictChange((state as State), district);
    setDistrict(district);
  }

  const matterChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onMatterChange(e.target.value);
  }

  return (
    <>
      <HStack justifyContent="space-between" alignItems="center" w="100%">
        <Text as="h2" fontWeight="bold" fontSize='3xl' color={textColor}>{resultTitle}</Text>
        <Text fontSize='md' color={captionColor}>{data?.length} {resultLengthLabel}</Text>
      </HStack>
      <HStack w="100%" spacing="50px" alignItems="flex-start">
        <Card padding={5} w="300px" h="100%">
          <Heading as="h3" color={textColor} size='md'>{filterTitle}</Heading>
          <VStack>
            <FormControl>
              <FormLabel>{filterStateLabel}</FormLabel>
              <Skeleton isLoaded={!statesIsLoading} fadeDuration={1}>
                <Select value={state?.value} onChange={stateChangeHandler} placeholder="Provincia" w="100%">
                  {
                    states?.map((state) => (
                      <option key={state.value} value={state.value}>{state.label}</option>
                    ))
                  }
                </Select>
              </Skeleton>
            </FormControl>
            <FormControl>
              <FormLabel>{filterDistrictLabel}</FormLabel>
              <Skeleton isLoaded={!statesIsLoading} fadeDuration={1}>
                <Select value={district?.value} onChange={districtChangeHandler} disabled={!state} placeholder="Cantón" w="100%">
                  {
                    state?.districts?.map((district) => (
                        <option key={district.value} value={district.value}>{district.label}</option>
                    ))
                  }
                </Select>
              </Skeleton>
            </FormControl>
            <FormControl>
              <FormLabel>{filterMatterLabel}</FormLabel>
              <Skeleton isLoaded={!isMattersLoading} fadeDuration={1}>
                <Select onChange={matterChangeHandler} placeholder="Materia" w="100%">
                  {
                    matters?.map((matter) => (
                        <option key={matter} value={matter}>{matter}</option>
                    ))
                  }
                </Select>
              </Skeleton>
            </FormControl>
            <FormControl>
              <FormLabel>{filterProcessNumberLabel}</FormLabel>
              <InputGroup>
                <Input placeholder={filterProcessNumberLabel} w="100%" />
                <InputRightElement pointerEvents="none">
                  <SearchIcon color='gray.300' />
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>{filterRoleLabel}</FormLabel>
              <Stack>
                <CheckboxGroup isNative value={value}>
                  <Checkbox {...getCheckboxProps({ value: 'actor' })}>{filterDefendantLabel}</Checkbox>
                  <Checkbox {...getCheckboxProps({ value: 'ofendido' })}>{filterPlaintiffLabel}</Checkbox>
                </CheckboxGroup>
              </Stack>
            </FormControl>
          </VStack>
        </Card>
        {
          isProcessLoading ? (
              <SimpleGrid columns={1} spacing='40px' w="100%">
                <Skeleton h='150px' />
                <Skeleton h='150px' />
                <Skeleton h='150px' />
              </SimpleGrid>
              ) : (
          <SimpleGrid columns={1} spacing='40px' w="100%">
              {
                data?.map((process) => (
                  <Card {...clickable} onClick={() => router.push(`/${process.id}`)
                  } key={`${process.id}-result`} paddingX={10} paddingY={5} w="100%">
                    <HStack h="100%" spacing='40px'>
                      <VStack h="100%" alignItems="flex-start">
                        <HStack>
                          <Text fontWeight="bold" fontSize='md' color={captionColor}>{resultProcessNumberLabel}</Text>
                          <Text fontSize='md' color={textColor}>{process.processNumber}</Text>
                        </HStack>
                        <HStack>
                          <Text fontWeight="bold" fontSize='md' color={captionColor}>{resultDateLabel}</Text>
                          <Text fontSize='md' color={textColor}>{process.registryDate}</Text>
                        </HStack>
                        <HStack>
                          <Text fontWeight="bold" fontSize='md' color={captionColor}>{resultInfractionLabel}</Text>
                          <Text fontSize='md' color={textColor}>{process.infraction}</Text>
                        </HStack>
                      </VStack >
                      <VStack alignItems="flex-start" justifyContent="flex-start" h="100%">
                        <HStack>
                          <Text fontWeight="bold" fontSize='md' color={captionColor}>{resultDefendantLabel}</Text>
                          <Text fontSize='md' color={textColor}>{process.plaintiff}</Text>
                        </HStack>
                        <HStack>
                          <Text fontWeight="bold" fontSize='md' color={captionColor}>{resultPlaintiffLabel}</Text>
                          <Text fontSize='md' color={textColor}>{process.plaintiff}</Text>
                        </HStack>
                      </VStack>
                    </HStack>
                  </Card>
                ))
              }
            </SimpleGrid>
          )
        }
      </HStack>
    </>
  );
}

export default QueryResult