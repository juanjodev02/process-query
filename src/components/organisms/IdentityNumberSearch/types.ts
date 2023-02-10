export type IdentityNumberSearchFields = {
  identityNumber: string
}

export type IdentityNumberSearchProps = {
  identityNumberPlaceholder: string
  buttonLabel: string

  identityNumberInvalidMessage: string

  identityNumberRequiredMessage: string

  onSubmit: (data: IdentityNumberSearchFields) => void

  isLoading: boolean
};