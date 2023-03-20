import React from 'react'
import flag from '../../Images/Icons/flag.svg'
import drop from '../../Images/Icons/downarrow.svg'

export default function LanguageFlag() {
  return (
    <div style={{display:'flex',gap:'5px'}}>
      <img src={flag} style={{ width: "20px", height: "20px" }} alt="" />
     <p style={{fontSize:'11px',color:'gray'}}>Eng</p>
          <img src={drop} style={{ width: "20px", height: "20px" }} alt="" />
    </div>
  );
}
