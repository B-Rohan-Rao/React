import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Hello there</h1>
      <Card game={'Call of Duty Mobile'} name={'Rohan'}/>
      <Card game={'Battle Ground Mobile India'} name={'Victor'}/>
      <Card game={'Delta Force Mobile'} name={'Assault'}/>
      <Card/>
    </>
  )
}

export default App
