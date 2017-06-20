import React, {Component} from 'react'
import {connect} from 'react-redux'

class BookList extends Component {
    render () {
        console.log('props ', this.props.books)
        return (        
        <div>
            <h2>Hi there</h2>
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