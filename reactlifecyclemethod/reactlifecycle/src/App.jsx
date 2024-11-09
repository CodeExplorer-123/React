import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Updating from './Component/ReactLifeCycleMethod'
import Unmounting from './Component/ReactLifeCycleMethod'



function App() {
  const[showComponent,setShowComponent] = useState(true);
  return <>
  <button onClick={()=>setShowComponent(res=>!res)}>Toggle Component</button>
  {showComponent && <Unmounting />}
  </>
}

export default App
