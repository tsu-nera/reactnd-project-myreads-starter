import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

const BookList = props => {
  const getBooksByCategory = category =>
    props.books.filter(book => book.shelf === category)

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            books={getBooksByCategory('wantToRead')}
            title="Want to Read"
            changeBookCategory={props.changeBookCategory}
          />
          <BookShelf
            books={getBooksByCategory('currentlyReading')}
            title="Currently Reading"
            changeBookCategory={props.changeBookCategory}
          />
          <BookShelf
            books={getBooksByCategory('read')}
            title="Read"
            changeBookCategory={props.changeBookCategory}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
}

export default BookList
