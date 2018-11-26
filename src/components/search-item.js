import React from 'react'

export default class SearchItem extends React.Component {

  addBook = (e) => {
    e.preventDefault()
    console.log("event target title: ", e.target.title)
    // const title = e.target.title
    // const author = e.target.author
    this.props.addBookToCartCB(e.target.title)
  }

  render (){
      //returns a row with 3 columns: name, price, and quantity.
      return (
      <div className="list-group-item">
        <div className="row">
          <div className="col-md-3">{this.props.title}</div>
          <div className="col-md-2">{this.props.author}</div>
          <div className="col-md-1">
            <button type="button" className="btn btn-outline-primary" onClick={this.addBook} title={this.props.title}>Add To Cart</button>
          </div>
        </div>
      </div>
    )
  }
}
