import React from 'react'
import CartItem from './cart-item'

export default class CartItems extends React.Component{

  render(){

      return(
        <div className="container">
          <h1>Your Cart: </h1>
          <div className="list-group">
            <div className="list-group-item">
              <div className="row">
                <div className="col-md-2">Title</div>
                <div className="col-md-2">Author</div>
                <div className="col-md-2">Price</div>
              </div>
            </div>
            {this.props.books.filter((elem) => elem.inCart === true).map((elem) => <CartItem key={elem.id} title={elem.title} author={elem.author} price={elem.price}/>)}
          </div>
        </div>
      )
    }
  }
