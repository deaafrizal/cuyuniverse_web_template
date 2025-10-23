import { useState } from 'react'
import cuyLogo from './assets/logo.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
        <div>
            <a href="https://youtube.com/deaafrizal" target="_blank">
            <img src={cuyLogo} className="logo cuy" alt="Cuy logo" />
            </a>
        </div>
        <h1>🏆 REACTVITE PACK 🏆</h1>
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
            realtime click {count}
            </button>
        </div>
        <p className="read-the-docs">
            how to run this pack: npm i & npm run dev on your terminal.
        </p>
        </div>
    )
}

export default App
