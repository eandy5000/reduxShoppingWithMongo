import React, {Component} from 'react'
import {connect} from 'react-redux'

 class BookList extends Component {
    list () {
        const {books} = this.props

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

export default connect(mapStateToProps)(BookList)