import React from 'react'

const sessions = () => {
  return (
    <div className='sessions' id='Sessions'>
      <h2>Training sessions</h2>
      <table>
        <tr>
          <th>Description</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wedsday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saterday</th>
          <th>Sunday</th>
        </tr>
        <tr>
          <td>Junior</td>
          <td>3pm</td>
          <td>-</td>
          <td>3pm</td>
          <td>-</td>
          <td>3pm</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Adult</td>
          <td>-</td>
          <td>5pm</td>
          <td>-</td>
          <td>5pm</td>
          <td>-</td>
          <td>5pm</td>
          <td>-</td>
          
        </tr>
        <tr>
          <td>Club Teams</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>5pm</td>
          <td>5pm</td>
          <td>5pm</td>
        </tr>
        
      </table>
    </div>
  )
}

export default sessions
