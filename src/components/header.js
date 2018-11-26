import React from 'react'

export default class PageHeader extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      searchBar: ''
    }
  }


  filterBooks = (e) =>{
    e.preventDefault()
    this.props.filterBooksCB(e.target.value)
  }

  render(){
    return (
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
          <a className="navbar-brand" href="somewhere">Bookstore</a>
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.filterBooks}/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    )
  }

}
