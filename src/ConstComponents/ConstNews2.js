

import React from 'react'

const ConstNews2 = ({news}) => {
  return (
    <>
    <div className='main_box_article'>
        <div className='content_box_article' style={{backgroundImage:`url('${news.article}')`}}>

        </div>
        <div>
        <button className='button_article'>{news.button}</button>
        <h4 className='title_article'>{news.title}</h4>
        </div>
    </div>
    </>
  )
}

export default ConstNews2