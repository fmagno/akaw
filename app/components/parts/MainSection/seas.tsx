import { Sea, SeaDay } from '@/app/tools/clients/ipma/interface'
import React, { Fragment } from 'react'
import useSeas from '../../hooks/useSea'
import { FARO_SEA_LOCATION } from '@/app/tools/clients/ipma/constants'

type Props = {}

const Seas = (props: Props) => {
  const { seas, error, isValidating } = useSeas()

  console.log('seas:', seas)

  return (
    <Fragment>
      <div className="text-4xl text-primary">Seas:</div>
      {seas?.length ? (
        <div className="flex flex-col sm:flex-row">
          {seas.map((sea: SeaDay, index: any) => {
            const sea_faro: Sea | undefined = sea.data.find(
              (sea_location: Sea) =>
                sea_location.globalIdLocal === FARO_SEA_LOCATION,
            )
            console.log('sea faro', sea_faro)
            return (
              <div key={index} className="px-4">
                <div className="text-xl text-secondary">
                  {sea.forecastDate.toString()}
                </div>
                <div>globalIdLocal: {sea_faro?.globalIdLocal}</div>
                <div>latitude: {sea_faro?.latitude}</div>
                <div>longitude: {sea_faro?.longitude}</div>
                <div>predWaveDir: {sea_faro?.predWaveDir}</div>
                <div>sstMax: {sea_faro?.sstMax}</div>
                <div>sstMin: {sea_faro?.sstMin}</div>
                <div>totalSeaMax: {sea_faro?.totalSeaMax}</div>
                <div>totalSeaMin: {sea_faro?.totalSeaMin}</div>
                <div>waveHighMax: {sea_faro?.waveHighMax}</div>
                <div>waveHighMin: {sea_faro?.waveHighMin}</div>
                <div>wavePeriodMax: {sea_faro?.wavePeriodMax}</div>
                <div>wavePeriodMin: {sea_faro?.wavePeriodMin}</div>
              </div>
            )
          })}
        </div>
      ) : (
        <div>(No warnings)</div>
      )}
    </Fragment>
  )
}

export default Seas
