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
  const { data, error, isValidating } = useSWR(
    {
      url: WARNINGS_URL,
      args: {},
    },
    listWarnings,
    {
      refreshInterval: REFRESH_INTERVAL,
    },
  )

  let warns = data

  if (warns) {
    warns = data?.filter((warning) => {
      return (
        warning.idAreaAviso === 'FAR' && warning.awarenessLevelID !== 'green'
      )
    })
  }

  return {
    warnings: warns,
    error,
    isValidating,
  }
}

export default useWarnings
