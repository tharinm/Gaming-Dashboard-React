import React from 'react'

export default function GunsSkinRightcardcompo({sub,title,img,color,power}) {
  return (
    <div style={{display:'flex',flexDirection:'column',padding:'4px'}}>
      <div style={{display:'flex',gap:'120px'}}>
        <div style={{display:'flex',flexDirection:'column',color:'white',textAlign:'left'}}>
          <p style={{fontSize:'10px'}}>{sub}</p>
          <p style={{fontSize:'13px'}}>{title}</p>
        </div>
        <div
          style={{
            height: "5px",
            width: "5px",
            borderTop: `20px solid ${color}`,
            borderLeft: "20px solid transparent",
          }}
        ></div>
      </div>
      <img src={img} alt="" style={{ width: "150px" ,height:'60px'}} />
      <p style={{color:'white',textAlign:'left'}}>{power}</p>
    </div>
  );
}
