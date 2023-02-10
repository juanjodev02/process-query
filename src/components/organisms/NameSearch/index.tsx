import {FC, useEffect} from "react";
import {NameSearchFields, NameSearchProps} from "@organisms/NameSearch/types";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {
  Box, Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import {Search2Icon} from "@chakra-ui/icons";
import { useRouter } from "next/router";


const NameSearch: FC<NameSearchProps> = ({
    buttonLabel,
    fullNamePlaceholder,
    fullNameRequiredMessage,
    onSubmit,
    isLoading
  }) => {
  const router = useRouter();
  const type = router.query.type;

  const schema = yup.object().shape({
    fullName: yup.string().required(fullNameRequiredMessage)
  })
  const {register, handleSubmit, formState: { errors }, setValue} = useForm<NameSearchFields>({
    resolver: yupResolver(schema),
    mode: 'all'
  })

  useEffect(() => {
    if (type === 'names') {
      setValue('fullName', router.query.fullName as string);
    }
  }, [type, setValue, router.query.fullName]);

  return (
      <HStack w="100%" alignItems="flex-end" justifyContent="center">
        <Box as="form" id="name-search-form" onSubmit={handleSubmit(onSubmit)} w="100%">
          <FormControl isRequired isInvalid={!!errors.fullName}>
            <FormLabel display="flex" gap="2px" requiredIndicator={<Text color="#A5221D">*</Text>}>
              {fullNamePlaceholder}
            </FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents='none'>
                <Search2Icon color='gray.300' />
              </InputLeftElement>
              <Input disabled={isLoading} textTransform="uppercase" placeholder={fullNamePlaceholder} {...register("fullName", {
                setValueAs: (value) => value.toUpperCase()
              })} />
            </InputGroup>
            <FormErrorMessage>{errors.fullName?.message}</FormErrorMessage>
          </FormControl>
        </Box>
        <Button isLoading={isLoading} variant="solid" colorScheme="facebook" form="name-search-form" type="submit">
          {buttonLabel}
        </Button>
      </HStack>
  );
}

export default NameSearch