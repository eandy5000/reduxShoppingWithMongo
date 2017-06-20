import React, {Component} from 'react'
import {connect} from 'react-redux'

class BookList extends Component {
    list () {
        const {books} = this.props.books
        console.log(books)
        return books.map(book => {
            return (
                <div key={book.id}>
                    {book.title}
                </div>
            )
        }) 
    }

    render () {
        console.log('props ', this.props.books)
        return (        
        <div>
            <h2>Hi there</h2>
            {this.list()}
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