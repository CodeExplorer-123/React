import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ConditionalRendering from './Component/ConditionalRendering'


function App() {
  const booleanValue = true;
  return( <>
  <ConditionalRendering value={booleanValue}></ConditionalRendering>
  </>
  )
}

export default App
