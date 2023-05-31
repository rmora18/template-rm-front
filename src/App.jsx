import { useState } from 'react'

import './App.css'
import Card from './Componente/Card'
import Formulario from './Componente/Formulario'


function App() {

  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const [viaje, setViaje] = useState({
    name: '',
    tipoViaje: '',
    date: null
  }) 
 
 

  const handleSubmit = (e) => {
    e.preventDefault()
    if (viaje.name.length >3 && viaje.tipoViaje.length>6) {
      setShow(true)
      setError(false)
    }else{
      setError(true)
    }
   
  }


return(
  <>
    <h1>Ingresar viaje a mi agenda</h1>

    <Formulario handleSubmit= {handleSubmit} setViaje={setViaje} />

    {show && <Card viaje={viaje}/>}
    {error && 'Por favor chequea que la información sea correcta'}

  </>

)

}

export default App

