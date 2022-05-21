import React from 'react'
import "./Header.css"
import {FaCheckCircle,FaFire} from "react-icons/fa"

const divStyle = {
  "backgroundColor" : "#00000",
  "border" : "blanchedalmond",
  "color" : "blanchedalmond"
};

export default function Header(props) {
  console.log(props)

  function changefilter(filter){
    props.passsetfilter(filter)
    if(filter == '24h Trending'){
      document.getElementById('24h').className = "button-active"
      document.getElementById('latest').className = "trending"
      document.getElementById('popular').className = "trending"
    }
    else if(filter == 'Latest Shows'){
      document.getElementById('24h').className = "trending"
      document.getElementById('latest').className = "button-active"
      document.getElementById('popular').className = "trending"
    }
    else if(filter == 'Most Popular'){
      document.getElementById('24h').className = "trending"
      document.getElementById('latest').className = "trending"
      document.getElementById('popular').className = "button-active"
    }
  }

  return (
    <div>
      <div className='header1'>
        Live Spaces
      </div>
      <div className='header2'>
        <FaCheckCircle style={{"paddingRight":"0.5%"}}/>
        All NFTs on Cyber either belong to or were minted by their space creator.
      </div>
      <div className='header3'>
      
        <button className='trending' id='24h' onClick={() => {changefilter("24h Trending")}}>🔥 24h Trending</button>
        <button className='trending' id='latest' onClick={() => {changefilter("Latest Shows")}}>Latest Shows</button>
        <button className='button-active' id='popular' onClick={() => {changefilter("Most Popular")}}>Most Popular</button>
        <button className='trending'>💎 In Genesis</button>
        <button className='trending'>🛕 In Temple</button>
        <button className='trending'>🌪 In Void</button>
        <button className='trending'>🦍 #Bayc</button>
      </div>
    </div>
  )
}
