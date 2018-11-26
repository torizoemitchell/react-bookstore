import React from 'react'

const PageHeader = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <form className="form-inline">
        <a className="navbar-brand" href="somewhere">Bookstore</a>
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </nav>
  )
}

export default PageHeader
