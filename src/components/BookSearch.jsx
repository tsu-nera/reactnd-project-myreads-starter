import React from 'react'
import { Link } from 'react-router-dom'

import * as BooksAPI from '../BooksAPI'
import Book from './Book'

class BookSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchBooksList: [],
    }
  }

  searchBooks(searchQuery) {
    if (searchQuery) {
      BooksAPI.search(searchQuery, 20).then(searchableBooks => {
        if (searchableBooks.length) {
          searchableBooks.forEach((book, index) => {
            const bookToBeMatched = this.props.books.find(
              currentBook => currentBook.id === book.id
            )
            if (bookToBeMatched) {
              book.type = bookToBeMatched.type
            } else {
              book.type = 'None'
            }
            searchableBooks[index] = book
          })
          this.setState({
            searchBooksList: searchableBooks,
          })
        }
      })
    } else {
      this.setState({
        searchBooksList: [],
      })
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close Search
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={event => this.searchBooks(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchBooksList.map(book => (
              <li key={book.id} className="contact-list-item">
                {console.log(book)}
                <Book book={book} changeBookType={this.props.changeBookType} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookSearch
