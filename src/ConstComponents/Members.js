import React from 'react'

const Members = ({team}) => {
  return (
    <>
    <div className='main_box_team'>
        <div className='content_box_team' style={{backgroundImage:`url('${team.image}')`}}></div>
        <h4 className='story_title' style={{marginTop:'20px'}}>{team.title}</h4>
        <p className='member_desc'>{team.desc}</p>
    </div>
    </>
  )
}

export default Members