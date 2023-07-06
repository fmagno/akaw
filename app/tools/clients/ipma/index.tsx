// import { OPEN_DATA_BASE_URL } from './constants'
// import {} from './interface'

import { Meteo, Sea, SeaDay, Warning, fetchArgs } from './interface'

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

  const seas: Sea[] = await Promise.all([
    responses[0].json(),
    responses[1].json(),
    responses[2].json(),
  ])

  return seas
}

export { listWarnings, getMeteos, getSeas }
