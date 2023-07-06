import React from 'react'
import Warnings from './warnings'
import Meteos from './meteos'
import Seas from './seas'
import Uvs from './uvs'

type Props = {}

function MainSection({}: Props) {
  return (
    <div>
      <Warnings />
      <Meteos />
      <Seas />
      <Uvs />
    </div>
  )

  return <div>Loading...</div>
}

export default MainSection
