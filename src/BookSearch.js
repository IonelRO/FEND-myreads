import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI';
import {Link} from 'react-router-dom';
//import escapeRegExp from 'escape-string-regexp';
import Book from './Book';

class BookSearch extends Component {
    state= {
        query: "",
        queriedBooks: []
    }

    //updates query based on input
    updateQuery = (query) => {
        this.setState({ query })
        this.updateBookSearch(query)
    }

    updateBookSearch = (query) => {
        //if the user types a query, look for books that match
        if (query) {
            //display books that match
            BooksAPI.search(query).then((queriedBooks) => {
                //if the search query doesn't exist, then show no results
                //many thanks to Maeva NAP from the FEND scholarship for
                //pointing me in the right direction to solve this
                //I also used this for reference: https://dev.to/sarah_chima/error-boundaries-in-react-3eib
                if (queriedBooks.error) {
                    this.setState({ queriedBooks: [] })
                } else {
                    this.setState({ queriedBooks })
                }
            })
            //if there is no query, then show no results
        } else {
            this.setState({ queriedBooks: [] })
        }
    }

    render() {
        return (
            <div className="search-books">
              <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                  <input
                    type="text"
                    placeholder="Search by title or author" value={this.state.query}
                    onChange={(event) => this.updateQuery(event.target.value)}
                    />
                </div>
              </div>

              <div className="search-books-results">
                <ol className="books-grid">
                    {this.state.queriedBooks
                        .map((queriedBook) =>
                        <li key={queriedBook.id}>
                            <Book book={queriedBook}/>
                        </li>
                    )}
                </ol>
              </div>
            </div>
        )
    }
}

export default BookSearch;
