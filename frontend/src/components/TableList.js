import React, { useContext } from 'react'
import TableRow from './TableRow'
import AppContext from '../context/AppContext'
import Preloader from './Preloader'

function TableList() {
  const { isPreloaderOpen, dataToRender } = useContext(AppContext)

  const table = (
    <table className="striped z-depth-2">
      <thead>
      <tr>
        <th>Дата</th>
        <th>Название</th>
        <th>Количество</th>
        <th>Расстояние</th>
      </tr>
      </thead>
      <tbody>
      { dataToRender.map((item, index) => <TableRow key={index} data={item} /> ) }
      </tbody>
    </table>
  )

  return (
    <>
      { isPreloaderOpen && <Preloader/> }
      { dataToRender.length === 0 && <h3>Not found data...</h3>}
      { dataToRender.length > 0 && table }
    </>

  )
}

export default TableList
