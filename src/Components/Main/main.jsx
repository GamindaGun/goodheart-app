import React from 'react'
import About from './About/about'
import News from './News/news'
import Ladder from './Ladder/ladder'
import Sessions from './Sessions/sessions'
import Photos from './Photos/photos'
import Forms from './Forms/forms'
import Homesld from './Home/home'
// import Name from './Name/name'
// import Logo from './logo/logo'

export default function Main() {
  return (
    <div className='mainContainer'>
      <div>
        {/* <Logo/> */}
        {/* <Name/> */}
      <Homesld/>
      <About/>
      <News/>
      <Ladder/>
      <Sessions/>
      <Photos/>
      <Forms/>
      </div>
    </div>
  )
}
