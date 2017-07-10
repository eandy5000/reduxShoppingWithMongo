import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Well, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap'
import {randomId} from '../util/helper'

// actions
import {addBook, deleteBook} from '../actions/booksActions'

class BookForm extends Component {
    handleSubmit () {
        const book = {
            title: findDOMNode(this.refs.title).value,
            price: parseFloat(findDOMNode(this.refs.price).value),
            _id: randomId()
        }
        this.props.addBook(book)
    }

    onDelete () {
        let bookId = findDOMNode(this.refs.delete).value
        console.log(bookId, typeof bookId)
        if (bookId !== "select") {
            this.props.deleteBook(bookId)
        }     
    }

    render () {
        const booksList = this.props.books.map(book => {
            return (
                <option key={book.title} value={book._id}>{book.title}</option>
            )
        })

        return (
            <Well>
                <Panel>
                    <FormGroup controlId="title">
                        <ControlLabel>Title</ControlLabel>
                        <FormControl 
                            type="text"
                            placeholder="Enter Title"
                            ref="title"
                        />
                    </FormGroup>
                    <FormGroup controlId="price">
                        <ControlLabel>Price</ControlLabel>
                        <FormControl 
                            type="text"
                            placeholder="Enter Price"
                            ref="price"
                        />
                    </FormGroup>
                    <Button 
                        bsStyle="success"
                        onClick={this.handleSubmit.bind(this)}
                    >Save</Button>
                </Panel>
                <Panel>
                    <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Delete a Book</ControlLabel>
                    <FormControl ref="delete" componentClass="select" placeholder="select">
                        <option value="select">Select</option>
                        {booksList}
                    </FormControl>
                    </FormGroup>
                    <Button 
                        bsStyle="danger"
                        onClick={this.onDelete.bind(this)}
                    >Delete</Button>
                </Panel>
            </Well>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books.books
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addBook,
        deleteBook
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookForm)