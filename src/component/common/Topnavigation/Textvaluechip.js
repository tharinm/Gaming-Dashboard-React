import React from 'react'

export default function Textvaluecard({img,count}) {
  return (
    <div style={{display:'flex',gap:'10px',marginLeft:'10px'}}>
          <img src={img} alt="" style={{ width: '20px' }} />
          <p style={{fontSize:'13px',color:'white'}}>{ count}</p>
    </div>
  )
}
