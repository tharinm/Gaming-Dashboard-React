import React from 'react'
import GunskinCard from './Gunskinstore/GunskinCard'
import SkinActionbtn from './Gunskinstore/SkinActionbtn'

export default function GunskinStore() {
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
      <GunskinCard />
      <SkinActionbtn/>
    </div>
  )
}
