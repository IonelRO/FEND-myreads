import React, { Component } from 'react';

class Book extends Component {

    render() {
        const newBookObject = new updateBookObject(this.props.bookID);
        //console.log(this.props.currentShelf);

        return (
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.url}")` }}></div>
                {/*TEST: this.props.url ? `url("${this.props.url}")` : ''*/}
                <div className="book-shelf-changer">
                  <select onChange={(event) =>
                       this.props.updateShelf(newBookObject, event.target.value)} defaultValue={this.props.currentShelf}>
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
