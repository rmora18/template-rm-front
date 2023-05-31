import React from 'react'

const Formulario = ({setViaje,handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit} className='formulario'>

    <label>Ingrese Ciudad</label>
    <input type='text' onChange={(e) => setViaje((prevState) => ({... prevState, name: e.target.value}))}/>

    <label>Ingrese motivo del viaje</label>
    <input type='text' onChange={(e) => setViaje((prevState) => ({... prevState, tipoViaje: e.target.value}))}/>

    <label>Ingrese fecha</label>
    <input type='date' onChange={(e) => setViaje((prevState) => ({... prevState, date: e.target.value}))}/>

    
    <button>Enviar</button>
   

    </form>
    
  )
}

export default Formulario
