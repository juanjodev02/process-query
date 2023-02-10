import {QueryResult} from "@/services/search.service";
import {State} from "@/services/filter-data.service";

export type QueryResultProps = {
  data: QueryResult
  states: State[]
  statesIsLoading: boolean
  isProcessLoading: boolean
  onStateChange: (state: State) => void
  matters: string[]
  isMattersLoading: boolean
  onMatterChange: (matter: string) => void
  onDistrictChange: (state: State, district: State) => void
  onStateUnselect: () => void
  onDistrictUnselect: () => void
}