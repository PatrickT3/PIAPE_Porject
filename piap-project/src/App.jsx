import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
     <main className='Main'>
      <h1 id='textpirnc'>PIAPE</h1>
      <Outlet/>
     </main>
    </>
  )
}

export default App
