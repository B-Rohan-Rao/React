import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'
import Checkboxes from './components/Checkboxes'

function App() {
  const[length, setLength] = useState(8)
  const[numberAllowed, setNumberAllowed] = useState(false)
  const[charAllowed, setCharAllowed] = useState(false)
  const[password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const generatePassword = useCallback(()=>{
      let pass = ''
      let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

      if(numberAllowed) str += '0123456789'
      if(charAllowed) str += '!@#$%^&*()_-/*-+'

      for(let i = 1; i < length; i++){
          const char = Math.floor(Math.random() * str.length + 1)
          pass += str.charAt(char)
      }
      setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copyPasswordClipboard = () => {
      window.navigator.clipboard.writeText(password)
      passwordRef.current?.select()
    }

  useEffect(() => {
      generatePassword()
  },[length, numberAllowed, charAllowed])


  return (
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-900 text-orange-500'>
          <h1 className='text-white text-center my-3'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
              <input type="text" value={password} className='outline-none w-full px-1 py-3 bg-gray-800' placeholder='Password' readOnly={true} ref={passwordRef}/>
              <button className='outline-none bg-gray-700 px-3 py-0.5 shrink-0' onClick={copyPasswordClipboard}>Copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
              <div className='flex item-center gap-x-1'>
                  <input type="range" min={6} max={10} value={length} className='cursor-pointer accent-blue-500'
                         onChange={(e) => setLength(e.target.value)}/>
                  <label htmlFor="length">Length: {length}</label>
              </div><br/>
              <Checkboxes name="Numbers" id="number"  checked={numberAllowed} onChange={setNumberAllowed}/>
              <Checkboxes name="Symbols" id="char" checked={charAllowed} onChange={setCharAllowed}/>
          </div>
      </div>
  )
}

export default App
