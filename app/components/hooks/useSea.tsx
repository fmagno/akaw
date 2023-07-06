import { useRouter } from 'next/router'
import useSWR from 'swr'
import {
  REFRESH_INTERVAL,
  METEO_URL,
  SEA_URL_PREFIX,
} from '@/app/tools/clients/ipma/constants'
import { getMeteos, getSeas } from '@/app/tools/clients/ipma'
import { Meteo, Sea, SeaDay } from '@/app/tools/clients/ipma/interface'

export type UseSeasHook = {
  seas: SeaDay[] | null | undefined
  error: Error | null
  isValidating: boolean
}

function useSeas(): UseSeasHook {
  const {
    data: seas,
    error,
    isValidating,
  } = useSWR(
    {
      url: SEA_URL_PREFIX,
      args: {},
    },
    getSeas,
    {
      refreshInterval: REFRESH_INTERVAL,
    },
  )

  return {
    seas,
    error,
    isValidating,
  }
}

export default useSeas
