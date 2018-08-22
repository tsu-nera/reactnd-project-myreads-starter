import React from 'react'
import Book from './Book'

const BookShelf = props => {
  const { books, title } = props

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (
            <li>
              <Book
                title={book.title}
                author={book.author}
                cover={book.cover}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default BookShelf
