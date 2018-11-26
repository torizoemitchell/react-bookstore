import React from 'react'
import Book from './book'

export default class BookList extends React.Component{

  render(){
    return(
      <div className="container-fluid">
          <h1>Available Books: </h1>
          <div className="list-group">
            <div className="list-group-item">
              <div className="row">
                <div className="col-md-3">Title</div>
                <div className="col-md-2">Author</div>
              </div>
            </div>
            {this.props.books.map((elem)=> <Book key={elem.id} title={elem.title} author={elem.author} addBookToCartCB={this.props.addBookToCartCB}/>)}
          </div>
        </div>
      )
  }
}
