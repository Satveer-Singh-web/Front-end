import React from 'react'

const ConstSubheader = ({items}) => {
  return (
    <div className='main_start_image' style={{backgroundImage:`url('${items.image}')`}}>
        <div className='for_overlay'></div>
        <div className='content_start'>
        <h1>{items.title}</h1>
        <p className='descP'>{items.desc}</p>
        </div>
    </div>
  )
}

export default ConstSubheader