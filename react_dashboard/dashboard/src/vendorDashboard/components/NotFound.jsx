import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div className='errorSection'>
        <Link to="/">
        <p>Go back</p>
        </Link>
        <h1>404</h1>
        <div>Page Not found</div>
    </div>
  )
}

export default Notfound