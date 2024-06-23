import { useState } from 'react'
import './App.css'
import BangladeshCricketTeam from './BangladeshCricketTeam'
import Friends from './Friends'
function App() {
  const eidStyle = {
    border: "2px ridge darkturquoise",
    margin: "15px",
    borderRadius: "15px",
    padding: "10px"
  }
  return (
    <>
      {/* Style method -1 */}
      <h1 style={{ "border": "2px solid purple", "borderRadius": "15px" }}>Fahim + Mahdi</h1>
      {/* this was way using css is just treating the style attribute as an object */}
      <div>
        {/* Style method -2 */}
        <p style={{ border: "3px dotted chartreuse" }}>He is working in Jamuna Bank PLC.</p>
        {/* Style method -3 */}
        <h5 style={eidStyle}>Today I am coding in Chand Raat. Tomorrow is Eid-ul-Adha 2024</h5>
      </div>
      {/* State Practice */}
      <div>
        <BangladeshCricketTeam></BangladeshCricketTeam>
      </div>
      <div>
        <Friends></Friends>
      </div>
    </>
  )
}
export default App
