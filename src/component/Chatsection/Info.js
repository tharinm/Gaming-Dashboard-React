import React from 'react'
import info from '../../Images/Icons/info.svg'

export default function Info() {
  return (
    <div style={{cursor:'pointer'}}>
      <img src={info} style={{ width: "20px", height: "20px" }} alt="" />
    </div>
  );
}
