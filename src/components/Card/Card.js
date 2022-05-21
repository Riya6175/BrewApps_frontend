import React from 'react'
import "./card.css"

export default function Card(props) {
  const card = props.props
  return (
    <div>
      <div className='main-div'>
        <img className='image' src={card.info.heroImg ? card.info.heroImg : `https://firebasestorage.googleapis.com/v0/b/cyber-art-prod.appspot.com/o/images%2FySfg4vnifD7v3sC9xmre%2Fhero?alt=media&token=b7363cc3-1530-448c-977d-2071029354bb`}/>
        <div className='black'>
          <div className='image-title'>
            <p>{card.info.headline}</p>
          </div>
          <div className='information'>
            @{card.info.info}<br/>
            {card.owner.substring(1,8)}...<br></br>
          </div>
        </div>
      </div>
    </div>
  )
}
