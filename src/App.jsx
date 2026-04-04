import { useState } from 'react'
import './App.css'
import NewsApp from './component/NewsApp/NewsApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">

     <NewsApp/>


     </div> 
    </>
  )
}

export default App
