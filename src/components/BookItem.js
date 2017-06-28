import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {toDollars} from '../util/helper'
import {addItem} from '../actions/cartActions'
import {Button, Well, Row, Col, ButtonGroup, Label} from 'react-bootstrap'


class BookItem extends Component {
    handleCart () {
        const {_id, price, title, addItem} = this.props
        const book = {
            _id,
            title,
            price 
        }
        addItem(book)
        
    }
    render () {
        const {price, title, _id} = this.props
        return (
            <Well>
                <Row>
                    <Col xs={12}>
                        <h6>{title}</h6>
                        <p>{toDollars(price)}</p>
                        <Button 
                            bsStyle="primary"
                            onClick={this.handleCart.bind(this)}
                        >Buy Me!</Button>
                    </Col>
                </Row>
            </Well>
        )
    }
}

function mapStateToProps (state) {
    return {
        
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({
        addItem
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookItem)