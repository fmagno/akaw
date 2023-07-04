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
  precipitaProb: number // '0.0'
  tMin: number // '20.9'
  tMax: number // '36.2'
  predWindDir: 'N' | 'NE' | 'E' | 'SE' | 'S' | 'SW' | 'W' | 'NW'
  idWeatherType: number // 2: Clear sky | 3: Partly cloudy | etc... | check: https://api.ipma.pt/open-data/weather-type-classe.json
  classWindSpeed: -99 | 1 | 2 | 3 | 4 // -99: -- | 1: weak | 2: moderate | 3: strong | 4: very strong | check: https://api.ipma.pt/open-data/wind-speed-daily-classe.json
  longitude: number // '-7.9331'
  latitude: number // '37.0146'
  forecastDate: Date //'2023-07-04'
}

interface Meteo {
  owner: 'IPMA'
  country: 'PT'
  data: MeteoDataItem[]
  globalIdLocal: 1080500
  dataUpdate: Date
}

interface fetchArgs {
  url: string
  args: {}
}

export { Warning, Meteo, MeteoDataItem, fetchArgs }
