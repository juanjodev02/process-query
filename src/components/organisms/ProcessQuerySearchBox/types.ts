export type ProcessQuerySearchBoxProps = {
  onSearchSubmit: (searchType: 'identityNumber' | 'names' | 'processNumber', data: object) => void

  isLoading: boolean
}