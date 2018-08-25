import React from 'react'
import { Route } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './components/BookList'
import BookSearch from './components/BookSearch'

class BooksApp extends React.Component {
  constructor() {
    super()
    this.state = {
      books: [],
    }

    this.changeBookCategory = this.changeBookCategory.bind(this)
  }

  componentDidMount() {
    BooksAPI.getAll().then(data => {
      this.setState({
        books: data,
      })
    })
  }

  getBooksOnShelf() {
    BooksAPI.getAll().then(data => {
      this.setState({
        books: data,
      })
    })
  }

  changeBookCategory(book, newCategory) {
    BooksAPI.update(book, newCategory).then(() => {
      book.shelf = newCategory
      this.setState(state => ({
        books: state.books
          .filter(currentBook => currentBook.id !== book.id)
          .concat([book]),
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BookList
              books={this.state.books}
              changeBookCategory={this.changeBookCategory}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <BookSearch
              books={this.state.books}
              changeBookCategory={this.changeBookCategory}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
