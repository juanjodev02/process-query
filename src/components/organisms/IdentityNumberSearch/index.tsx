import {
  Box,
  Button,
  FormControl, FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import {Search2Icon} from "@chakra-ui/icons";
import {useForm} from "react-hook-form";
import {FC, useEffect} from "react";
import * as yup from "yup";
import {validateEcuadorianID} from "@/utils/identityNumberValidator";
import {yupResolver} from "@hookform/resolvers/yup";
import {IdentityNumberSearchFields, IdentityNumberSearchProps} from "@organisms/IdentityNumberSearch/types";
import { useRouter } from "next/router";


const IdentityNumberSearch: FC<IdentityNumberSearchProps> = (
    {
      identityNumberPlaceholder,
      buttonLabel,
      identityNumberRequiredMessage,
      identityNumberInvalidMessage,
      onSubmit,
      isLoading
    }
) => {
  const router = useRouter();
  const type = router.query.type;

  const schema = yup.object().shape({
    identityNumber: yup.string()
        .required(identityNumberRequiredMessage)
        .test(
          'identityNumber',
          identityNumberInvalidMessage,
          (value) => validateEcuadorianID(String(value))
        )
  });
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<IdentityNumberSearchFields>({
    resolver: yupResolver(schema),
    mode: 'all'
  });

  useEffect(() => {
    if (type === 'identityNumber') {
      setValue('identityNumber', router.query.identityNumber as string);
    }
  }, [type, setValue, router.query.identityNumber]);

  return (
    <HStack
      w="100%"
      alignItems={['center', 'center', 'flex-end']}
      justifyContent="center"
      flexDir={['column', 'column', 'row']}
      gap={['20px', '20px', '0px']}
    >
     <Box
      as="form"
      id="identity-number-search-form"
      onSubmit={handleSubmit(onSubmit)}
      w="100%"
      >
       <FormControl isRequired isInvalid={!!errors.identityNumber}>
        <FormLabel display="flex" gap="2px" requiredIndicator={<Text color="#A5221D">*</Text>}>
          {identityNumberPlaceholder}
        </FormLabel>
         <InputGroup>
           <InputLeftElement pointerEvents='none'>
             <Search2Icon color='gray.300' />
           </InputLeftElement>
          <Input disabled={isLoading} type="number" placeholder={identityNumberPlaceholder} {...register("identityNumber", {
            valueAsNumber: true,
          })} />
         </InputGroup>
         <FormErrorMessage>{errors.identityNumber?.message}</FormErrorMessage>
       </FormControl>
     </Box>
     <Button isLoading={isLoading} variant="solid" colorScheme="facebook" form="identity-number-search-form" type="submit">
        {buttonLabel}
     </Button>
    </HStack>
 );
}

export default IdentityNumberSearch