export type NameSearchFields = {
  fullName: string
}

export type NameSearchProps = {
  fullNamePlaceholder: string
  buttonLabel: string
  fullNameRequiredMessage: string
  onSubmit: (data: NameSearchFields) => void

  isLoading: boolean
}