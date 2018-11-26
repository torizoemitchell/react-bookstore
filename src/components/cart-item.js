import React from 'react'

export default class CartItem extends React.Component {


  render (){
      //returns a row with 3 columns: name, price, and quantity.
      return (
      <div className="list-group-item">
        <div className="row">
          <div className="col-md-2">{this.props.title}</div>
          <div className="col-md-2">{this.props.author}</div>
          <div className="col-md-2">${this.props.price}.00</div>
        </div>
      </div>
    )
  }
}
