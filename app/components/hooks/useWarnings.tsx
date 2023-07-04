import { useRouter } from 'next/router'
import useSWR from 'swr'
import {
  REFRESH_INTERVAL,
  WARNINGS_URL,
} from '@/app/tools/clients/ipma/constants'
import { listWarnings } from '@/app/tools/clients/ipma'
import { Warning } from '@/app/tools/clients/ipma/interface'

export type UseWarningsHook = {
  warnings: Warning[] | any | null
  error: Error | null
  isValidating: boolean
}

function useWarnings(): UseWarningsHook {
  const {
    data: dataWarnings,
    error: errorWarnings,
    isValidating: isValidatingWarnings,
  } = useSWR(
    {
      url: WARNINGS_URL,
      args: {},
    },
    listWarnings,
    {
      refreshInterval: REFRESH_INTERVAL,
    },
  )

  if (dataWarnings) {
    const warnings_faro = dataWarnings.filter((warning) => {
      return (
        warning.idAreaAviso === 'FAR' && warning.awarenessLevelID !== 'green'
      )
    })
    return {
      warnings: warnings_faro,
      error: errorWarnings,
      isValidating: isValidatingWarnings,
    }
  }

  return {
    warnings: dataWarnings,
    error: errorWarnings,
    isValidating: isValidatingWarnings,
  }
}

export default useWarnings
