// interface ListJobsArgs {
//   url: string
//   args: {
//     user: string
//     skip: string
//     limit: string
//   }
// }

// interface RetrieveJobArgs {
//   url: string
//   args: {
//     user: string
//     jobId: string
//   }
// }

// interface Basin {
//   name: string
//   imw: number
//   imh: number
//   coefs: string
//   crmin: number
//   crmax: number
//   cimin: number
//   cimax: number
//   itmax: number
//   tol: number
//   image_url: string
//   thumbnail_url: string
// }

// interface Job {
//   id: string
//   basin: Basin
//   status: 'running' | 'done' | 'failed' | 'pending'
//   progress: number
//   date: Date
// }

// interface JobListResp {
//   total: number
//   data: Job[]
// }

// export { ListJobsArgs, RetrieveJobArgs, CreateJob, Job, Basin, JobListResp }

interface Warning {
  text: string
  awarnessTypeName:
    | 'Trovoada'
    | 'Agitação Marítima'
    | 'Precipitação'
    | 'Vento'
    | 'Nevoeiro'
    | 'Neve'
    | 'Tempo Frio'
    | 'Tempo Quente'
  awarenessLevelID: 'yellow' | 'orange' | 'red' | 'green' // 'green' should not trigger a warning
  startTime: Date
  endTime: Date
  idAreaAviso: string // check idAreaAviso here: https://api.ipma.pt/open-data/distrits-islands.json
}

interface MeteoDataItem {
  precipitaProb: number // e.g '0.0'
  tMin: number // e.g '20.9'
  tMax: number // e.g '36.2'
  predWindDir: 'N' | 'NE' | 'E' | 'SE' | 'S' | 'SW' | 'W' | 'NW'
  idWeatherType: number // e.g 2: Clear sky | 3: Partly cloudy | etc... | check: https://api.ipma.pt/open-data/weather-type-classe.json
  classWindSpeed: -99 | 1 | 2 | 3 | 4 // e.g -99: -- | 1: weak | 2: moderate | 3: strong | 4: very strong | check: https://api.ipma.pt/open-data/wind-speed-daily-classe.json
  longitude: number // e.g '-7.9331'
  latitude: number // e.g '37.0146'
  forecastDate: Date // e.g'2023-07-04'
}

interface Meteo {
  owner: 'IPMA'
  country: 'PT'
  data: MeteoDataItem[]
  globalIdLocal: 1080500
  dataUpdate: Date
}

interface Sea {
  wavePeriodMin: number // e.g	"2.6"
  globalIdLocal: number // e.g 1080526
  totalSeaMax: number // e.g 1
  waveHighMax: number // e.g '0.6'
  waveHighMin: number // e.g '0.1'
  longitude: number // e.g '-8.0000'
  wavePeriodMax: number // e.g '3.3'
  latitude: number // e.g '37.1933'
  totalSeaMin: number // e.g 0.5
  sstMax: number // e.g '23.5'
  predWaveDir: 'N' | 'NE' | 'E' | 'SE' | 'S' | 'SW' | 'W' | 'NW' // e.g 'NW'
  sstMin: number // e.g '22.8'
}

interface SeaDay {
  country: 'PT'
  data: Sea[]
  dataUpdate: Date
  forecastDate: Date
  owner: 'IPMA'
}

interface Uv {
  idPeriodo: number // e.g 4
  intervaloHora: string // e.g '12h-16h'
  data: Date // e.g '2023-07-06'
  globalIdLocal: number // e.g 3480200
  iUv: number // e.g '7.2'
}

interface fetchArgs {
  url: string
  args: {}
}

export { Warning, Meteo, MeteoDataItem, Sea, SeaDay, Uv, fetchArgs }
