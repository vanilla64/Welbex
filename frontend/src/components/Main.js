import React from 'react'
import TableList from './TableList'
import FilterForm from './FilterForm'

function Main() {
  const styles = {
    main: {
      width: '90%',
      margin: '0 auto'
    }
  }

  return (
    <main className={styles.main}>
      <FilterForm />
      <TableList />
    </main>
  )
}

export default Main
