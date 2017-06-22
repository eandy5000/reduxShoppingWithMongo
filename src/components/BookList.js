import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {getBooks} from '../actions/booksActions'
import {connect} from 'react-redux'

 class BookList extends Component {
    componentDidMount() {
        this.props.getBooks()
    }

    list () {
        const {books, getBooks} = this.props
        return books.map(book => {
            return (
                <div key={book.id}>
                {book.title}
                </div>
            )
        })
    }
    
    render () {
        console.log(this.props.books)
        return (        
        <div>
            test
            {this.list()}
        </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        books: state.books.books
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
            getBooks
        }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)