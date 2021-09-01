import { FORM_VALUES } from "./constants"
const { TITLE } = FORM_VALUES

//Фильтрация по 'Равно'
export const filterColumnEqual = (col, val, data, setter) => {
  const value = parseInt(val)
  let filteredData

  if (col === TITLE) {
    filteredData = data.filter(i => i[col].length === value)
    return setter(filteredData)
  }
  filteredData = data.filter(i => i[col] === value)
  return setter(filteredData)
}

//Фильтрация по 'Содержит'
export const filterColumnIncludes = (col, val, data, setter) => {
  let filteredData

  if (col === TITLE) {
    filteredData = data.filter(i => i[col].toLowerCase().includes(val))
    return setter(filteredData)
  }
  filteredData = data.filter(i => i[col].toString().includes(val))
  return setter(filteredData)
}

//Фильтрация по 'Больше'
export const filterColumnMore = (col, val, data, setter) => {
  const value = parseInt(val)
  let filteredData

  if (col === TITLE) {
    filteredData = data.filter(i => i[col].length > value)
    return setter(filteredData)
  }
  filteredData = data.filter(i => i[col].toString() > value)
  return setter(filteredData)
}

//Фильтрация по 'Меньше'
export const filterColumnLess = (col, val, data, setter) => {
  const value = parseInt(val)
  let filteredData

  if (col === TITLE) {
    filteredData = data.filter(i => i[col].length < value)
    return setter(filteredData)
  }
  filteredData = data.filter(i => i[col].toString() < value)
  return setter(filteredData)
}
