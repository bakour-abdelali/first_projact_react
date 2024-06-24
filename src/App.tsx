// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Prgraf from './compones/Prgraf'
import { useState } from 'react';
import { IUserData } from './interfaces/user_data';


// import Prgraf from './compones/Prgraf'
// import SnakeGame from './compones/Prgraf'

function App() {
  const [isLoding, setLoding] = useState(false)
  const [user, setUser] = useState<IUserData>({
    userName: "",
    address: "",
    email: "",
    password: "",
  });

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {isLoding===false? 
      <Prgraf setUser={setUser} user={user} login={isLoding} setLoding={setLoding}/>:<p>is lofing:{isLoding}</p>}
      
     
    </>
  )
}

export default App
