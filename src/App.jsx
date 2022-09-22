import React from 'react'
import { notify as Notify } from "./components/Toast";

const App = () => {
  return (
    <div className='flex h-screen'>
      <Notify />
    </div>
  )
}

export default App;
