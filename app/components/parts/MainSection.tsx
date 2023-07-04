import React, { Fragment, ReactNode } from 'react'
import useMainSection from '../hooks/useMainSection'
import {
  Meteo,
  MeteoDataItem,
  Warning,
} from '@/app/tools/clients/ipma/interface'

type Props = {}

function MainSection({}: Props) {
  const { warnings, meteos } = useMainSection()

  if (warnings.error || meteos.error) {
    return (
      <div>
        <div>Warnings errors: {warnings.error}</div>
        <div>Meteos errors: {meteos.error}</div>
      </div>
    )
  }

  // return <main> {JSON.stringify(warnings)} </main>
  return (
    <div>
      <div className="text-4xl text-primary">Warnings:</div>
      {warnings.data && (
        <div>
          {warnings.data.map((warning: Warning, index: any) => {
            return (
              <div key={index}>
                <div>{warning.text}</div>
                <div>{warning.awarenessLevelID}</div>
                <div>{warning.awarnessTypeName}</div>
                <div>{warning.startTime.toString()}</div>
                <div>{warning.endTime.toString()}</div>
                <div>{warning.idAreaAviso}</div>
              </div>
            )
          })}
        </div>
      )}
      <div className="text-4xl text-primary">Meteos:</div>
      {meteos.data && (
        <div>
          {meteos.data.data.map((meteoItem: MeteoDataItem, index: any) => {
            return (
              <div key={index}>
                <div className="text-xl text-primary">
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
    </div>
  )

  return <div>Loading...</div>

  // return <main> {warnings[0]} </main>
}

export default MainSection
