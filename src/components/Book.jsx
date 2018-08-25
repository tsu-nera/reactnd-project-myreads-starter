import React from 'react'

const Book = props => {
  const handleOnchange = event => {
    props.changeBookType(props.book, event.target.value)
  }

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${props.book.imageLinks.thumbnail})`,
          }}
        />
        <div className="book-shelf-changer">
          <select onChange={handleOnchange}>
            <option value="move" disabled>
              Move to...
            </option>
            <option value="Current">Currently Reading</option>
            <option value="Want">Want to Read</option>
            <option value="Read">Read</option>
            <option value="None">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">{props.book.authors}</div>
    </div>
  )
}

export default Book
