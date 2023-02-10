export type ProcessNumberSearchProps = {
  dependencyCodeRequiredLabel: string
  yearRequiredLabel: string
  sequentialNumberRequiredLabel: string

  dependencyCodeLabel: string

  yearLabel: string

  sequentialNumberLabel: string

  dependencyCodePlaceholder: string

  yearPlaceholder: string

  sequentialNumberPlaceholder: string

  buttonLabel: string

  onSubmit: (values: ProcessNumberSearchFields) => void

  isLoading: boolean
}

export type ProcessNumberSearchFields = {
  dependencyCode: string

  year: string

  sequentialNumber: string
}