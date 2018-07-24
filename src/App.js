import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import {Route} from 'react-router-dom';
import AppContainer from './AppContainer';
import BookSearch from './BookSearch';

class BooksApp extends React.Component {
    state = {
        books: [],
        query: ""
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        })
    }

    updateShelf = (book, shelf) => {
        BooksAPI.update(book, shelf);
        //re-render page on shelfChange
        /*this.setState((prevState, props) => {
            return(this.updateShelf)
        })*/
    }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <AppContainer
                books={this.state.books}
                updateShelf={this.updateShelf} />
        )} />

        <Route path="/search" component={BookSearch}/>
      </div>
    )
  }
}
export default BooksApp;
