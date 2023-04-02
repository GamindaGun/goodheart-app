import React from 'react'
import HiddenCon from './hiddenCon'

const About = () => {

  const blogText = `Goodheart sport club started in 1999 with some local sports men and over the past years club has become one of the top competitive 
      sports club in Australia. Over the years we were able participate to major competitions and with the dedication of our trainers we were able to get many achievements. 
      Over the years we been able to introduce many young sports men in to the national level.`;
  return (
    <div className='about' id='About'>
      <h2>About</h2>
<div className='Blog'>
  <HiddenCon text ={blogText}/>
</div>
  
    
  </div>

  )
}

export default About
