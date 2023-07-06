import { useRouter } from 'next/router'
import useSWR from 'swr'
import {
  FARO_GLOBAL_ID,
  REFRESH_INTERVAL,
  UV_URL,
} from '@/app/tools/clients/ipma/constants'
import { getUvs } from '@/app/tools/clients/ipma'
import { Uv as UvClient } from '@/app/tools/clients/ipma/interface'
import { Uv } from '../interface'

export type UseUvsHook = {
  uvs: Uv[] | null | undefined
  error: Error | null
  isValidating: boolean
}

function useUvs(): UseUvsHook {
  const { data, error, isValidating } = useSWR(
    {
      url: UV_URL,
      args: {},
    },
    getUvs,
    {
      refreshInterval: REFRESH_INTERVAL,
    },
  )

  const uvs_faro: UvClient[] | undefined | null = data?.filter(
    (uv: UvClient) => uv.globalIdLocal === FARO_GLOBAL_ID,
  )

  const uvs: Uv[] | undefined | null = uvs_faro?.map((uv: UvClient) => ({
    date: uv.data,
    globalIdLocal: uv.globalIdLocal,
    hourInterval: uv.intervaloHora,
    iUv: uv.iUv,
    periodId: uv.idPeriodo,
  }))

  return {
    uvs,
    error,
    isValidating,
  }
}

export default useUvs
