import React, {Component} from 'react'
import './App.css'
import PageHeader from './components/header'
import BookList from './components/book-list'
import CartItems from './components/cart-items'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      isLoaded: false,
      books: {},
    }
  }

  async componentDidMount(){
    const response = await fetch("http://localhost:8082/api/books")
    const jsonResponse = await response.json()
    this.setState({
      books: jsonResponse,
      isLoaded: true,
    })
  }

  addBookToCart = (title) =>{
    console.log("add item to cartItems:")
    console.log("title: ", title)
    //find this item in the available books:
    const books = this.state.books
    var bookToAddIdx
    books.forEach((elem, idx) => {
      if (title === elem.title){
        bookToAddIdx = idx
        console.log("bookToAddIdx: ", bookToAddIdx)
      }
    })
    //update inCart for this item in state:
    this.setState({
      ...this.state,
      books: this.editInCart(this.state.books, bookToAddIdx)
    })
  }

  //takes an array of objects and edits the inCart property at the index.
  //without mutating, returns the new array.
  editInCart = (array, idx) =>{
    const newObject = array[idx]
    newObject.inCart = true
    // const newArray = array.slice(idx+1)
    return [
      ...array.slice(0, idx),
      newObject,
      ...array.slice(idx + 1)
    ]
  }

  render() {
    if(!this.state.isLoaded){
      return(
        <div>
          <h1>Loading...</h1>
        </div>
      )
    }else{
      return (
        <div className="App">
          <PageHeader/>
          <div className="container-fluid">
            <div className="row">
              <div className="col-6">
                <BookList books={this.state.books} addBookToCartCB={this.addBookToCart}/>
              </div>
              <div className="col-6">
                <CartItems books={this.state.books} />
                <h4>Total: ${this.state.books.filter((elem) => elem.inCart === true).length > 0 ? this.state.books.filter(elem => elem.inCart).map(elem => elem.price).reduce((acc, current) => acc + current) : "0"}.00</h4>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default App
