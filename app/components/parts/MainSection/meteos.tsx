import {
  Meteo,
  MeteoDataItem,
  Warning,
} from '@/app/tools/clients/ipma/interface'
import React, { Fragment } from 'react'
import useMeteos from '../../hooks/useMeteo'

type Props = {}

const Meteos = (props: Props) => {
  const { meteos, error, isValidating } = useMeteos()

  return (
    <Fragment>
      <div className="w-full text-4xl text-primary">Meteos:</div>
      {meteos?.data && (
        <div className="flex flex-col sm:flex-row">
          {meteos?.data.map((meteoItem: MeteoDataItem, index: any) => {
            return (
              <div key={index} className="px-2">
                <div className="text-xl text-secondary">
                  {meteoItem.forecastDate.toString()}
                </div>
                <div>classWindSpeed: {meteoItem.classWindSpeed}</div>
                <div>forecastDate: {meteoItem.forecastDate.toString()}</div>
                <div>idWeatherType: {meteoItem.idWeatherType}</div>
                <div>latitude: {meteoItem.latitude}</div>
                <div>longitude: {meteoItem.longitude}</div>
                <div>precipitaProb: {meteoItem.precipitaProb}</div>
                <div>predWindDir: {meteoItem.predWindDir}</div>
                <div>tMin: {meteoItem.tMin}</div>
                <div>tMax: {meteoItem.tMax}</div>
              </div>
            )
          })}
        </div>
      )}
    </Fragment>
  )
}

export default Meteos
