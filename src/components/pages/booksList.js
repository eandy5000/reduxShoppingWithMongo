import React, {Component} from 'react'
import {connect} from 'react-redux'

class BookList extends Component {
    render () {
        console.log(this.props.books)
        return (<div>test</div>)
    }
}

function mapStateToProps (state) {
    return {
        books: state.books.books
    }
}

export default connect(mapStateToProps)(BookList)