import React from 'react'

function TableRow({ data }) {
  const { date, title, quantity, distance } = data

  return (
    <tr>
      <th>{ date }</th>
      <th>{ title }</th>
      <th>{ quantity + 'шт' }</th>
      <th>{ distance + 'м' }</th>
    </tr>
  )
}

export default TableRow
