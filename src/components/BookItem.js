import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {toDollars} from '../util/helper'
import {addItem, updateCart} from '../actions/cartActions'
import {Button, Well, Row, Col, ButtonGroup, Label} from 'react-bootstrap'


class BookItem extends Component {
    handleCart () {
        const {_id, price, title, addItem, cart, updateCart} = this.props
        const book = {
            _id,
            title,
            price,
            qty: 1 
        }

        const upArr = cart
        const upItem = upArr[_id]
        const itemCheck = upArr.findIndex(item => item._id === _id)

        if (upArr.length > 0) {
            if (itemCheck === -1) {
                addItem(book)
            } else {
                updateCart(_id, 1)
            }
        } else {
            addItem(book)
        }

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
        cart: state.cart.cart
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({
        addItem,
        updateCart
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookItem)