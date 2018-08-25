import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

const BookList = props => {
  const getBooksByType = type => props.books.filter(book => book.type === type)

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            books={getBooksByType('Current')}
            title="Currently Reading"
            changeBookType={props.changeBookType}
          />
          <BookShelf
            books={getBooksByType('Want')}
            title="Want to Read"
            changeBookType={props.changeBookType}
          />
          <BookShelf
            books={getBooksByType('Read')}
            title="Read"
            changeBookType={props.changeBookType}
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
