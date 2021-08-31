import React from 'react'

function FilterForm() {
  return (
    <form className="row">
      <div className="input-field col s3">
        <select>
          <option value="" disabled selected>Выберите колонку</option>
          <option value="title">Название</option>
          <option value="quantity">Количество</option>
          <option value="distance">Расстояние</option>
        </select>
        <label>Колонка</label>
      </div>
      <div className="input-field col s3">
        <select>
          <option value="" disabled selected>Выберите фильтр</option>
          <option value="equal">Равно</option>
          <option value="includes">Содержит</option>
          <option value="3">Больше</option>
          <option value="4">Меньше</option>
        </select>
        <label>Фильтр</label>
      </div>
      <div className="input-field col s3">
        <label htmlFor="first_name">Значение</label>
        <input placeholder="Значение" id="value" type="text" className="validate"/>
      </div>
      <button className="waves-effect waves-light btn col s3">Submit</button>
    </form>
  )
}

export default FilterForm
