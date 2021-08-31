import React from 'react'
import TableRow from './TableRow'

function TableList() {
  return (
    <table className="striped z-depth-3">
      <thead>
      <tr>
        <th>Дата</th>
        <th>Название</th>
        <th>Количество</th>
        <th>Расстояние</th>
      </tr>
      </thead>
      <tbody>
      <TableRow data={{
        date: '28.12.1988',
        title: 'Тортик',
        quantity: 5,
        distance: 402,
      }} />
      <TableRow data={{
        date: '21.02.1998',
        title: 'Котик',
        quantity: 22,
        distance: 1202,
      }} />
      <TableRow data={{
        date: '11.07.1098',
        title: 'Старичок',
        quantity: 51,
        distance: 34,
      }} />
      </tbody>
    </table>
  )
}

export default TableList
