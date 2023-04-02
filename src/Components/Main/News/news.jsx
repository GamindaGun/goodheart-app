import React from 'react'

const news = () => {
  return (
    
    
    <div className='news' id='News'>
      <h2>NRL News</h2>
      {/* News section of the page  */}
      
        <iframe className='video1' width="560" height="315" src="https://www.youtube-nocookie.com/embed/WVTrxIcrm-E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
        <iframe className='video1' width="560" height="315" src="https://www.youtube-nocookie.com/embed/VyEDa87fHHs?start=15" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    
        <iframe className='video1' width="560" height="315" src="https://www.youtube-nocookie.com/embed/4AYIvmAP3oI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
        <iframe className='video1' width="560" height="315" src="https://www.youtube-nocookie.com/embed/X8caIxU77eA?start=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      
      <div class="newsimg1">
        <h3>The NRL halves under the most preasure</h3>
        <img src="http://localhost:3000/goodheart-app/westimg.png" alt="5 Terre"/>
        <p>No team is under more pressure than the Wests Tigers who have a major decision to make on their halves.</p>
    
      </div>

      <div class="newsimg1">
        
        <h3>NRL Round4 Tips: Matto's redemption and a Bronco blitz</h3>
        <img src="http://localhost:3000/goodheart-app/NRLnews2.png" alt="Norther Lights"/>
        <p>From redemption matches to pressure already on already stretched squad depths and must-win games, here are the burning issues heading into this NRL round - plus all our expert tips.</p>
      
      </div>
      
      </div>


  )
}
export default news
