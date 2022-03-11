import React from 'react'

export default function Loader({clsName}) {
  return (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
    }}>
      <i className={clsName} data-id="loading" style={{marginTop:'5%'}}></i>
      </div>
  )
}
