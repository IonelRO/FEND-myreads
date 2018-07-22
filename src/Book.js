import React, { Component } from 'react';

class Book extends Component {

    render() {
        //console.log(this.props.updateShelf);
        var newBookObject = new updateBookObject(this.props.bookID);
        console.log(newBookObject);

        return (
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.url}")` }}></div>
                <div className="book-shelf-changer">
                  <select onChange={(event) =>
                       this.props.updateShelf(newBookObject, event.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{this.props.title}</div>
              <div className="book-authors">{this.props.authors}</div>
            </div>
        )
    }
}

class updateBookObject {
    constructor(id){
        this.id = id;
    }
}

export default Book;
