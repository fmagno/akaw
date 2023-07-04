import { useRouter } from 'next/router'
import useWarnings from './useWarnings'
import useMeteos from './useMeteo'
import { Meteo, Warning } from '@/app/tools/clients/ipma/interface'

export type UseMainSectionHook = {
  warnings: {
    data: Warning[] | null | undefined
    error: any | null
    isValidating: boolean | null
  }
  meteos: {
    data: Meteo | null | undefined
    error: any | null
    isValidating: boolean | null
  }
}

interface MainSectionData {}

function useMainSection(): UseMainSectionHook {
  const {
    warnings,
    error: errorWarnings,
    isValidating: isValidatingWarnings,
  } = useWarnings()
  const {
    meteos,
    error: errorMeteos,
    isValidating: isValidatingMeteos,
  } = useMeteos()

  console.log(meteos)

  return {
    warnings: {
      data: warnings,
      error: errorWarnings,
      isValidating: isValidatingWarnings,
    },
    meteos: {
      data: meteos,
      error: errorMeteos,
      isValidating: isValidatingMeteos,
    },
  }
}

export default useMainSection
