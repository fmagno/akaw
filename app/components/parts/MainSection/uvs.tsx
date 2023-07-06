import React, { Fragment } from 'react'
import useUvs from '../../hooks/useUv'
import { Uv } from '../../interface'

type Props = {}

const Uvs = (props: Props) => {
  const { uvs, error, isValidating } = useUvs()

  return (
    <Fragment>
      <div className="w-full text-4xl text-primary">UVs:</div>
      {uvs?.length && (
        <div className="flex flex-col sm:flex-row">
          {uvs.map((uv: Uv, index: any) => {
            return (
              <div key={index} className="px-2">
                <div className="text-xl text-secondary">
                  {uv.date.toString()}
                </div>
                <div>periodId: {uv.periodId}</div>
                <div>hourInterval: {uv.hourInterval}</div>
                <div>globalIdLocal: {uv.globalIdLocal}</div>
                <div>iUv: {uv.iUv}</div>
              </div>
            )
          })}
        </div>
      )}
    </Fragment>
  )
}

export default Uvs
