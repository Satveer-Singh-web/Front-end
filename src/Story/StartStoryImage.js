import React from 'react'
import ConstSubheader from '../ConstComponents/ConstSubheader'
import storyImage from './../Assets/story.jpg'
const StartStoryImage = () => {
    var items = {
        image: storyImage,
        title: "Kitchen's Story",
        desc: 'this is how our kitchen evolved in new digital era'
    }
    return (
        <>
            <ConstSubheader items={items} />
        </>
    )
}

export default StartStoryImage