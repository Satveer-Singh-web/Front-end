import React from 'react'

const ConstNews1 = ({data}) => {
  return (
    <>
    <div className='main_news_box'>
        <div className='content_news_box' style={{backgroundImage:`url('${data.newImage}')`}}>
            <button className='news_button'>{data.button}</button>
            <h1 className='news_title'>{data.title}</h1>
        </div>
    </div>
    </>
  )
}

export default ConstNews1