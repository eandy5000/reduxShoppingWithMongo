import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Well, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap'
// actions
import {addBook} from '../actions/booksActions'

class BookForm extends Component {
    handleSubmit () {
        const book = {
            title: findDOMNode(this.refs.title).value,
            price: parseFloat(findDOMNode(this.refs.price).value),
            id: Math.floor(Math.random() * 100000)
        }
        this.props.addBook(book)
        // console.log( typeof book.title)
    }

    render () {
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
            </Well>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addBook
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(BookForm)