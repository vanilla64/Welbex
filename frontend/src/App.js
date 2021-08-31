import React, { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import M from 'materialize-css'

function App() {
  useEffect(() => {
    const dropdown = document.querySelectorAll('select')
    M.FormSelect.init(dropdown)
  }, [])

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
