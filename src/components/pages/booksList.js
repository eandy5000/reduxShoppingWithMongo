import React, {Component} from 'react'
import {connect} from 'react-redux'

class BookList extends Component {
    render () {
        const {books} = this.props
        const list = books.map((book) => {
            return (
                <div key={book.id}>
                    <h3>{book.title}</h3>
                    <p>{book.price}</p>
                </div>
            )
        })
        return (
            <div>
                <h2>React App</h2>
                {list}
            </div>
            )
    }
}

function mapStateToProps (state) {
    return {
        books: state.books.books
    }
}

export default connect(mapStateToProps)(BookList)