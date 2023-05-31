import React from 'react'


const Card = ({viaje}) => {
  return (
    <div className='card' >
        <h2>Nos vamos de viaje a {viaje.name}</h2>
    
        <h3>Mi viaje es para {viaje.tipoViaje}</h3>

        <h3>Fecha de mi viaje {viaje.date}</h3>

        <h1>LEST GOO!!</h1>
    </div>
  )
}
 
export default Card 