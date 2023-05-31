import { useState } from 'react'

import './App.css'
import Card from './Componente/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" 
    style={{
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center'}}>

      <h1>Carga de estudiantes </h1>
      
      <form style={{
          display:'flex',
          flexDirection:'column',
          width :'200px',
          alignItems:'center',
          }}>



      </form>

      <Card/>
    </div>
  )
}

export default App
