import React, {Component} from 'react'
import './App.css'
import PageHeader from './components/header'
import BookList from './components/book-list'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      isLoaded: false,
      books: {},
      //cart items ex: {title: bookTitle, author: bookAuthor, price: bookPrice}
      cartItems: {}
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
    var bookObjToAdd
    books.forEach((elem) => {
      if (title === elem.title){
        bookObjToAdd = elem
        console.log("bookToAdd: ", bookObjToAdd)
      }
    })
    const bookToAdd = {
      title: bookObjToAdd.title,
      author: bookObjToAdd.author,
      price: bookObjToAdd.price
    }
    //update cartItems in state with this item.
    this.setState({
      ...this.state,
      cartItems:{
        ...this.state.cartItems,
        bookToAdd
      }
    })
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
                <h4>cart goes here</h4>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default App
