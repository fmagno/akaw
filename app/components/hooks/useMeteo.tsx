import { useRouter } from 'next/router'
import useSWR from 'swr'
import {
  REFRESH_INTERVAL,
  METEO_URL,
  WIND_SPEED_CLASSES_URL,
  FARO_GLOBAL_ID,
  WEATHER_TYPES_URL,
} from '@/app/tools/clients/ipma/constants'
import {
  getMeteos,
  getWeatherTypes,
  getWindSpeedClasses,
} from '@/app/tools/clients/ipma'
import {
  Meteo as MeteoClient,
  MeteoDataItem as MeteoDataItemClient,
  WeatherTypesItem,
  WindSpeedClass,
} from '@/app/tools/clients/ipma/interface'
import { Meteo, MeteoDataItem } from '../interface'

export type UseMeteosHook = {
  meteos: Meteo | null | undefined
  error: Error | null
  isValidating: boolean
}

function useMeteos(): UseMeteosHook {
  const {
    data: meteoClient,
    error: errorMeteo,
    isValidating: isValidatingMeteo,
  } = useSWR(
    {
      url: METEO_URL,
      args: {},
    },
    getMeteos,
    {
      refreshInterval: REFRESH_INTERVAL,
    },
  )

  const {
    data: windSpeedClasses,
    error: errorWindSpeedClasses,
    isValidating: isValidatingWindSpeed,
  } = useSWR(
    {
      url: WIND_SPEED_CLASSES_URL,
      args: {},
    },
    getWindSpeedClasses,
    {
      refreshInterval: REFRESH_INTERVAL,
    },
  )

  const {
    data: weatherTypes,
    error: errorWeatherTypes,
    isValidating: isValidatingWeatherTypes,
  } = useSWR(
    {
      url: WEATHER_TYPES_URL,
      args: {},
    },
    getWeatherTypes,
    {
      refreshInterval: REFRESH_INTERVAL,
    },
  )

  const meteosItems: MeteoDataItem[] | undefined = meteoClient?.data.map(
    (meteoItemClient: MeteoDataItemClient) => {
      const windSpeedClass: WindSpeedClass | undefined =
        windSpeedClasses?.data.find((windSpeedClass: WindSpeedClass) => {
          return (
            windSpeedClass.classWindSpeed ===
            meteoItemClient.classWindSpeed.toString()
          )
        })

      const weatherType: WeatherTypesItem | undefined = weatherTypes?.data.find(
        (weatherType: WeatherTypesItem) => {
          return weatherType.idWeatherType === meteoItemClient.idWeatherType
        },
      )
      const meteoItem: MeteoDataItem = {
        ...meteoItemClient,
        classWindSpeed: windSpeedClass?.descClassWindSpeedDailyEN || 'NULL',
        weatherType: weatherType?.descWeatherTypeEN || 'NULL',
      }
      return meteoItem
    },
  )

  return {
    meteos: {
      owner: meteoClient?.owner || 'IPMA',
      country: meteoClient?.country || 'PT',
      globalIdLocal: meteoClient?.globalIdLocal || FARO_GLOBAL_ID,
      dateUpdate: meteoClient?.dataUpdate || new Date(),
      data: meteosItems || [],
    },
    error: errorMeteo,
    isValidating: isValidatingMeteo,
  }
}

export default useMeteos
