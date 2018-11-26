import React from 'react'
import SearchItem from './search-item'

export default class SearchItems extends React.Component{

  render(){
      console.log("this.props.books",this.props.books)

      return(
        <div className="container">
          <div className="list-group">
            <div className="list-group-item">
              <div className="row">
                <div className="col-md-3">Title</div>
                <div className="col-md-2">Author</div>
              </div>
            </div>
            {this.props.searchResults.map((elem) => <SearchItem key={elem.id} title={elem.title} author={elem.author} addBookToCartCB={this.props.addBookToCartCB}/>)}
          </div>
        </div>
      )
    }
  }
