// import { OPEN_DATA_BASE_URL } from './constants'
// import {} from './interface'

import {
  Meteo,
  Sea,
  SeaDay,
  Uv,
  Warning,
  WeatherTypes,
  WindSpeedClasses,
  fetchArgs,
} from './interface'

async function listWarnings(listWarningsArgs: fetchArgs): Promise<Warning[]> {
  console.log('calling listWarnings...')
  const {
    url,
    args: {},
  } = listWarningsArgs
  const response = await fetch(url)
  const warnings: Warning[] = await response.json()
  return warnings
}

async function getMeteos(getMeteosArgs: fetchArgs): Promise<Meteo> {
  console.log('calling getMeteos...')
  const {
    url,
    args: {},
  } = getMeteosArgs
  const response = await fetch(url)
  const meteos: Meteo = await response.json()
  return meteos
}

async function getSeas(getSeasArgs: fetchArgs): Promise<SeaDay[]> {
  console.log('calling getSeas...')
  const {
    url,
    args: {},
  } = getSeasArgs

  const responses = await Promise.all([
    fetch(`${url}/hp-daily-sea-forecast-day0.json`),
    fetch(`${url}/hp-daily-sea-forecast-day1.json`),
    fetch(`${url}/hp-daily-sea-forecast-day2.json`),
  ])

  const seas: SeaDay[] = await Promise.all([
    responses[0].json(),
    responses[1].json(),
    responses[2].json(),
  ])

  return seas
}

async function getUvs(getUvsArgs: fetchArgs): Promise<Uv[]> {
  console.log('calling getUvs...')
  const {
    url,
    args: {},
  } = getUvsArgs

  const response = await fetch(url)
  const uvs: Uv[] = await response.json()
  return uvs
}

async function getWindSpeedClasses(
  getWindSpeedClassesArgs: fetchArgs,
): Promise<WindSpeedClasses> {
  console.log('calling getWindSpeedClasses...')
  const {
    url,
    args: {},
  } = getWindSpeedClassesArgs

  const response = await fetch(url)
  const windSpeedClasses: WindSpeedClasses = await response.json()
  return windSpeedClasses
}

async function getWeatherTypes(
  getWeatherTypesArgs: fetchArgs,
): Promise<WeatherTypes> {
  console.log('calling getWeatherTypes...')
  const {
    url,
    args: {},
  } = getWeatherTypesArgs

  const response = await fetch(url)
  const weatherTypes: WeatherTypes = await response.json()
  return weatherTypes
}

export {
  listWarnings,
  getMeteos,
  getSeas,
  getUvs,
  getWindSpeedClasses,
  getWeatherTypes,
}
