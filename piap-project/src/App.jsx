import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
     <main className='Main'>
      <h1>Começou</h1>
      <Outlet/>
      <h2>fim</h2>
     </main>
    </>
  )
}

export default App
