import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import AppContext from './context/AppContext'
import M from 'materialize-css'
import API from './utils/API'
import { PAGE_SIZE } from './utils/constants'
import { FORM_VALUES } from './utils/constants'
import {
  filterColumnEqual,
  filterColumnIncludes,
  filterColumnMore,
  filterColumnLess,
} from './utils/filterHandlers'

function App() {
  const [tableData, setTableData] = useState([])
  const [dataToRender, setDataToRender] = useState([])
  const [isPreloaderOpen, setIsPreloaderOpen] = useState(true)

  const { EQUAL, INCLUDES, LESS, MORE } = FORM_VALUES

  const handleFilterFormSubmit = formValues => {
    const { column, filter, value } = formValues

    if (filter === EQUAL) return filterColumnEqual(column, value, tableData, setDataToRender)
    if (filter === INCLUDES) return filterColumnIncludes(column, value, tableData, setDataToRender)
    if (filter === MORE) return filterColumnMore(column, value, tableData, setDataToRender)
    if (filter === LESS) return filterColumnLess(column, value, tableData, setDataToRender)
  }

  const context = {
    tableData,
    dataToRender,
    setDataToRender,
    isPreloaderOpen,
    handleFilterFormSubmit,
  }

  useEffect(() => {
    const dropdown = document.querySelectorAll('select')
    M.FormSelect.init(dropdown)
  }, [])

  useEffect(() => {
    API.get('')
      .then(res => {
        const data = res.data
        const renderData = data.slice(0, PAGE_SIZE)

        setTableData(data)
        setDataToRender(renderData)
      })
      .finally(() => setIsPreloaderOpen(false))
      .catch(err => console.log('ERROR ' + err))
  }, [])


  return (
    <AppContext.Provider value={context}>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </AppContext.Provider>
  )
}

export default App
