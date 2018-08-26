import React from 'react'

class Book extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentBookCategory: props.book.shelf,
    }

    this.handleOnchange = this.handleOnchange.bind(this)
  }

  handleOnchange(event) {
    this.props.changeBookCategory(this.props.book, event.target.value)
    this.setState({
      currentBookCategory: event.target.value,
    })
  }

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                this.props.book.imageLinks
                  ? this.props.book.imageLinks.thumbnail
                  : null
              })`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              value={this.state.currentBookCategory}
              onChange={this.handleOnchange}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="wantToRead">Want to Read</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    )
  }
}

export default Book
