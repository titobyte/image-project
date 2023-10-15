import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <h1>Img Up</h1>
      <div className="card">
        <input className="image-input" type="text" placeholder="Search image"/>

        <input className="image-btn" type="file" accept="image/*"/>
      </div>
      <p className="read-the-docs">
        Made with Vite and React
      </p>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  )
}

export default App
