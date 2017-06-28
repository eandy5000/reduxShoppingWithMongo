import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {getBooks} from '../actions/booksActions'
import {connect} from 'react-redux'
//components
import {Grid, Col, Button, Row} from 'react-bootstrap'
import BookItem from './BookItem'
import BookForm from './BookForm'
import Cart from './Cart'


 class BookList extends Component {
    componentDidMount() {
        this.props.getBooks()
    }

    list () {
        const {books, getBooks} = this.props
        return books.map(book => {
            return (
                <Col xs={12} sm={6} md={4} key={book._id}>
                    <BookItem 
                        _id={book._id}
                        title={book.title}
                        price={book.price}
                    />
                </Col>
            )
        })
    }
    
    render () {
        return (        
        <Grid>
            <Row>
                <Cart />
            </Row>
            <Row style={{marginTop: '.2em'}}>
            <Col xs={12} sm={6}>
                <BookForm />
            </Col>
            {this.list()}
            </Row>
        </Grid>
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