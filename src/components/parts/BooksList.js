import React, {Component} from 'react'
import {connect} from 'react-redux'

import BookDetail from './BookDetail'

class BookList extends Component {
    lister() {
        const {books} = this.props.books
        return books.map(book => {
            return (
                <BookDetail 
                    key={book.id}
                    title={book.name}
                    price={book.price}
                />
            )
        })
    }

    render() {

        return (
            <div>
                <h4>Book List</h4>
                <ul>
                    {this.lister()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps)(BookList)