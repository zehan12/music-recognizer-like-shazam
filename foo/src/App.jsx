import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/layout/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
      <Header />
      <main className='w-[100%] h-[100vh] bg-red-400'
        style={{
          backgroundColor: "#85FFBD",
          backgroundImage: "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)"
        }}
      >
        <h1>dk</h1>
      </main>
    </Fragment>
  )
}

export default App
