import {FC, useEffect} from "react";
import * as yup from "yup";
import {ProcessNumberSearchFields, ProcessNumberSearchProps} from "@organisms/ProcessNumberSearch/types";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Button, FormControl, FormErrorMessage, FormLabel, HStack, Input, Text} from "@chakra-ui/react";
import { useRouter } from "next/router";

const ProcessNumberSearch: FC<ProcessNumberSearchProps> = (props) => {
  const router = useRouter();
  const type = router.query.type;
  const schema = yup.object().shape({
    dependencyCode: yup.string().required(props.dependencyCodeRequiredLabel),
    year: yup.string().required(props.yearRequiredLabel),
    sequentialNumber: yup.string().required(props.sequentialNumberRequiredLabel)
  });

  const {register, handleSubmit, formState: { errors }, setValue} = useForm<ProcessNumberSearchFields>({
    resolver: yupResolver(schema),
    mode: 'all'
  })

  useEffect(() => {
    if (type === 'processNumber') {
      setValue('dependencyCode', router.query.dependencyCode as string);
      setValue('sequentialNumber', router.query.sequentialNumber as string);
      setValue('year', router.query.year as string);
    }
  }, [type, setValue, router.query]);

  return (
      <HStack w="100%">
        <HStack onSubmit={handleSubmit(props.onSubmit)} id="process-number-form" as="form" w="100%" alignItems="flex-start" justifyContent="center">
          <FormControl isRequired isInvalid={!!errors.dependencyCode}>
          <FormLabel display="flex" gap="2px" requiredIndicator={<Text color="#A5221D">*</Text>}>{props.dependencyCodeLabel}</FormLabel>
            <Input disabled={props.isLoading} placeholder={props.dependencyCodePlaceholder} {...register("dependencyCode")}/>
            <FormErrorMessage>{errors.dependencyCode?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={!!errors.year}>
            <FormLabel display="flex" gap="2px" requiredIndicator={<Text color="#A5221D">*</Text>}>{props.yearLabel}</FormLabel>
            <Input disabled={props.isLoading} type="number" maxLength={4} placeholder={props.yearPlaceholder} {...register("year", {
              valueAsNumber: true,
            })}/>
            <FormErrorMessage>{errors.year?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={!!errors.sequentialNumber}>
            <FormLabel display="flex" gap="2px" requiredIndicator={<Text color="#A5221D">*</Text>}>{props.sequentialNumberLabel}</FormLabel>
            <Input disabled={props.isLoading} placeholder={props.sequentialNumberPlaceholder} {...register("sequentialNumber")}/>
            <FormErrorMessage>{errors.sequentialNumber?.message}</FormErrorMessage>
          </FormControl>
        </HStack>
        <Button isLoading={props.isLoading} variant="solid" colorScheme="facebook" form="process-number-form" type="submit" >
          {props.buttonLabel}
        </Button>
      </HStack>
  );
}

export default ProcessNumberSearch;