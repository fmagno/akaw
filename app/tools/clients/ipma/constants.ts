// import { env } from '../../tools/env'

// const API_BASE_URL = 'http://api:9000/api/v1'
// const API_BASE_URL = `${env.NEXT_PUBLIC_HTTP_PROTOCOL}://${env.NEXT_PUBLIC_API_HOSTNAME}:${env.NEXT_PUBLIC_API_PORT}/api/v1`

// // const API_BASE_URL = `${env.NEXT_PUBLIC_HTTP_PROTOCOL}://${env.NEXT_PUBLIC_API_HOSTNAME}:${env.NEXT_PUBLIC_API_PORT}/api/v1`
// const REFRESH_INTERVAL = env.NEXT_PUBLIC_REFRESH_INTERVAL

// // const API_BASE_URL = `http://${process.env.NEXT_PUBLIC_API_HOSTNAME}:${process.env.NEXT_PUBLIC_API_PORT}/api/v1`
// // const REFRESH_INTERVAL = process.env.NEXT_PUBLIC_REFRESH_INTERVAL

// const API_JOBS_URL = `${API_BASE_URL}/jobs`

// export { API_BASE_URL, API_JOBS_URL, REFRESH_INTERVAL }

// https://api.ipma.pt/open-data/forecast/warnings/warnings_www.json
// https://api.ipma.pt/open-data/forecast/meteorology/cities/daily
// https: //api.ipma.pt/open-data/forecast/meteorology/cities/daily
// https: //api.ipma.pt/open-data/forecast/meteorology/cities/daily
// https: //api.ipma.pt/open-data/observation/seismic
// https: //api.ipma.pt/open-data/forecast/oceanography/daily
// https: //api.ipma.pt/open-data/forecast/meteorology/rcm
// https: //api.ipma.pt/open-data/forecast/meteorology/uv/uv.json
// https: //api.ipma.pt/open-data/observation/meteorology/stations/observations.json
// https: //api.ipma.pt/open-data/observation/meteorology/stations/obs-surface.geojson
// https: //api.ipma.pt/open-data/observation/climate/evapotranspiration/
// https: //api.ipma.pt/open-data/observation/climate/precipitation-total/
// https: //api.ipma.pt/open-data/observation/climate/temperature-min/
// https: //api.ipma.pt/open-data/observation/climate/temperature-max/
// https: //api.ipma.pt/open-data/observation/climate/mpdsi/
// https: //api.ipma.pt/open-data/observation/biology/bivalves/CI_SNMB.geojson
// https: //api.ipma.pt/open-data/sea-locations.json
// https: //api.ipma.pt/open-data/wind-speed-daily-classe.json
// https: //api.ipma.pt/open-data/precipitation-classe.json

const REFRESH_INTERVAL = 60000

const FARO_STATION_ID = 1200554
const FARO_GLOBAL_ID = 1080500
const FARO_SEA_LOCATION = 1080526

const OPEN_DATA_BASE_URL = 'https://api.ipma.pt/open-data'
const WARNINGS_URL = `${OPEN_DATA_BASE_URL}/forecast/warnings/warnings_www.json`
const METEO_URL = `${OPEN_DATA_BASE_URL}/forecast/meteorology/cities/daily/${FARO_GLOBAL_ID}.json` // globalIdLocal = FAR / Local = Faro / Check: https://api.ipma.pt/open-data/distrits-islands.json
const SEA_URL_PREFIX = `${OPEN_DATA_BASE_URL}/forecast/oceanography/daily` // concatenate with one of: /hp-daily-sea-forecast-day{0,1,2}.json
export {
  WARNINGS_URL,
  METEO_URL,
  REFRESH_INTERVAL,
  SEA_URL_PREFIX,
  FARO_GLOBAL_ID,
  FARO_SEA_LOCATION,
  FARO_STATION_ID,
}

// Faro stationId: 1200554
// Faro globalIdLocal: 1080500
// Faro globalIdLocal (sea locations): 1080526
