import React from 'react'
import PlayersinfoLeft from './Playersinfo/PlayersinfoLeft'

import PlayersinfoRight from './Playersinfo/PlayersinfoRight'

export default function PalyersInfo() {
  return (
    <div style={{display:'flex',width:'800px',justifyContent:'space-between'}}>
      <PlayersinfoLeft/>
      <PlayersinfoRight/>
    </div>
  )
}
