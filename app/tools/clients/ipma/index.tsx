// import { OPEN_DATA_BASE_URL } from './constants'
// import {} from './interface'

import { Meteo, Warning, fetchArgs } from './interface'

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

async function listMeteos(listMeteosArgs: fetchArgs): Promise<Meteo> {
  console.log('calling listMeteos list...')
  const {
    url,
    args: {},
  } = listMeteosArgs
  const response = await fetch(url)
  const meteos: Meteo = await response.json()
  return meteos
}

export { listWarnings, listMeteos }
