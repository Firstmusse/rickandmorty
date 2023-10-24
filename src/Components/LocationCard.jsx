import React from 'react'
import './LocationCard.css'

const LocationCard = (card) => {


   return(

           <div className="location-card-item">
              <h3> Name<br/>
                  {card.name}
              </h3>
              <span>Type: {card.type}</span>
              <h4>Data: {card.createdData}</h4>
           </div>

   )

}
export default LocationCard
