import { useRouter } from 'next/router'
import useSWR from 'swr'
import { REFRESH_INTERVAL, METEO_URL } from '@/app/tools/clients/ipma/constants'
import { listMeteos } from '@/app/tools/clients/ipma'
import { Meteo } from '@/app/tools/clients/ipma/interface'

export type UseMeteosHook = {
  meteos: Meteo | null | undefined
  error: Error | null
  isValidating: boolean
}

function useMeteos(): UseMeteosHook {
  const {
    data: meteos,
    error,
    isValidating,
  } = useSWR(
    {
      url: METEO_URL,
      args: {},
    },
    listMeteos,
    {
      refreshInterval: REFRESH_INTERVAL,
    },
  )

  return {
    meteos,
    error,
    isValidating,
  }
}

export default useMeteos
