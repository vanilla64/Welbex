import React, { useState, useContext } from 'react'
import { FORM_VALUES } from '../utils/constants'
import AppContext from '../context/AppContext'

function FilterForm() {
  const { handleFilterFormSubmit } = useContext(AppContext)
  const [values, setValues] = useState({
    column: '',
    filter: '',
    value: '',
  })

  const { TITLE, DISTANCE, QUANTITY, EQUAL, INCLUDES, LESS, MORE } = FORM_VALUES

  const handleChange = evt => {
    const { name, value } = evt.target
    setValues(prev => { return { ...prev, [name]: value } })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    handleFilterFormSubmit(values)
  }

  const setPlaceholder = () => {
    if (values.column === TITLE) return 'Кол-во символов'
    if (values.column === QUANTITY) return 'Штуки'
    if (values.column === DISTANCE) return 'Метры'
    return 'Значение'
  }

  return (
    <form onChange={handleChange} onSubmit={handleSubmit} className="row">
      <div className="input-field col s3">
        <select defaultValue={values.column} name="column">
          <option value={''} disabled>Выберите колонку</option>
          <option value={TITLE}>Название</option>
          <option value={QUANTITY}>Количество</option>
          <option value={DISTANCE}>Расстояние</option>
        </select>
        <label>Колонка</label>
      </div>
      <div className="input-field col s3">
        <select defaultValue={values.filter} name="filter">
          <option value={''} disabled>Выберите фильтр</option>
          <option value={EQUAL}>Равно</option>
          <option value={INCLUDES}>Содержит</option>
          <option value={MORE}>Больше</option>
          <option value={LESS}>Меньше</option>
        </select>
        <label>Фильтр</label>
      </div>
      <div className="input-field col s3">
        <label htmlFor="first_name">Значение</label>
        <input
          required
          placeholder={setPlaceholder()}
          name="value"
          type="text"
          className="validate"/>
      </div>
      <button className="waves-effect waves-light btn col s3">Submit</button>
    </form>
  )
}

export default FilterForm
