import React from 'react'

function Preloader() {
  return (
    <>
      <h3>Loading...</h3>
      <div className="progress">
        <div className="indeterminate" />
      </div>
    </>
  )
}

export default Preloader
