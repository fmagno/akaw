import React from 'react'
import Warnings from './warnings'
import Meteos from './meteos'
import Seas from './seas'

type Props = {}

function MainSection({}: Props) {
  return (
    <div>
      <Warnings />
      <Meteos />
      <Seas />
    </div>
  )

  return <div>Loading...</div>
}

export default MainSection
