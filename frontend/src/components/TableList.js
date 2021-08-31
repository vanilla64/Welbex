import React from 'react'
import TableRow from "./TableRow";

function TableList() {
  return (
    <table className="striped z-depth-5">
      <thead>
      <tr>
        <th>Дата</th>
        <th>Название</th>
        <th>Количество</th>
        <th>Расстояние</th>
      </tr>
      </thead>
      <tbody>
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
      </tbody>
    </table>
  )
}

export default TableList
