import { Warning } from '@/app/tools/clients/ipma/interface'
import React, { Fragment } from 'react'
import useWarnings from '../../hooks/useWarnings'

type Props = {}

const Warnings = (props: Props) => {
  const { warnings, error, isValidating } = useWarnings()

  return (
    <Fragment>
      <div className="text-4xl text-primary">Warnings:</div>
      {warnings?.length ? (
        <div>
          {warnings.map((warning: Warning, index: any) => {
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
      ) : (
        <div>(No warnings)</div>
      )}
    </Fragment>
  )
}

export default Warnings
