import React, { useState, useContext } from 'react'
import { PAGE_SIZE } from '../utils/constants'
import AppContext from '../context/AppContext'

function Pagination() {
  const [activeItem, setActiveItem] = useState(1)
  const [portionCount, setPortionCount] = useState(0)

  const { tableData, setDataToRender } = useContext(AppContext)

  const portionSize = 10
  const pageCount = Math.ceil(tableData.length / PAGE_SIZE)

  let items = []
  for (let i = 1; i <= pageCount; i++) {
    items.push(i)
  }

  let portionTotalCount = Math.ceil(pageCount / portionSize)

  let subItems = []
  for (let i = 0; i <Math.ceil(items.length / portionSize); i++){
    subItems[i] = items.slice((i * portionSize), (i * portionSize) + portionSize)
  }

  const handleItemClick = (evt) => {
    const numberOfItem = parseInt(evt.target.closest('a').textContent)
    setActiveItem(numberOfItem)

    const arrToRender = tableData.slice(PAGE_SIZE * numberOfItem - PAGE_SIZE, numberOfItem * PAGE_SIZE)
    setDataToRender(arrToRender)
  }

  const increaseItem = () => {
    if (portionCount === portionTotalCount - 1) { return }
    setPortionCount(prev => prev + 1)
  }

  const decreaseItem = () => {
    if (portionCount === 0) { return }
    setPortionCount(prev => prev - 1)
  }

  return (
    <ul className="pagination">
      <li onClick={decreaseItem} className={portionCount !== 0 ? 'waves-effect' : 'disabled'}>
        <a href="#!"><i className="material-icons">chevron_left</i></a>
      </li>

      {
        subItems[portionCount].map(item =>
          <li key={item} onClick={handleItemClick} className={activeItem === item ? 'active' : 'waves-effect'}>
            <a href="#!">{ item }</a>
          </li>)
      }

      <li onClick={increaseItem} className={portionCount !== portionTotalCount - 1 ? 'waves-effect' : 'disabled'}>
        <a href="#!"><i className="material-icons">chevron_right</i></a>
      </li>
    </ul>
  )
}

export default Pagination
