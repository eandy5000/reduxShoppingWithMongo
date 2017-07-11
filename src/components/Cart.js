import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Panel, Col, Row, Well, Button, ButtonGroup, Label, Modal} from 'react-bootstrap'
import {addItem, deleteItem, updateCart} from '../actions/cartActions'
import {toDollars} from '../util/helper'

class Cart extends Component {
    constructor () {
        super()
        this.state = {
            showModal: false
        }
    }

    open() {
        this.setState({showModal: true})
    }

    close() {
        this.setState({showModal: false})
    }
    
    onDelete(_id) {
        let cartArr = this.props.cart
        const delIndex = cartArr.findIndex((item) => item._id === _id)
        let cartAfterDelete = [...cartArr.slice(0, delIndex), ...cartArr.slice(delIndex + 1)]
        this.props.deleteItem(cartAfterDelete)
    }
    
    onInc (_id, unit) {
        this.props.updateCart(_id, unit)
    }

    onDec (_id, unit, qty) {
        if (qty + unit <= 0) {
            return this.onDelete(_id)
        }
        this.props.updateCart(_id, unit)
    }

    render() {
        if (this.props.cart[0]) {
            return this.renderCart()
        }
        return this.renderEmpty()
    }

    renderEmpty() {
        return (
            <div></div>
        )
    }

    renderCart() {
        const list = this.props.cart.map(item => {
            return (
                <Panel key={item._id}>
                    <Row>
                        <Col xs={12} sm={4}>
                        <h6>{item.title}</h6>
                        </Col>
                        <Col xs={12} sm={2}>
                            <h6>{toDollars(item.price)}</h6>
                        </Col>
                        <Col xs={12} sm={2}>
                            <h6>Qty: <Label bsStyle="success">{item.qty}</Label></h6>
                        </Col>
                        <Col xs={6} sm={4}>
                            <ButtonGroup style={{minWidth: '300px'}}>
                                <Button 
                                    bsStyle="default" 
                                    bsSize="small"
                                    onClick={this.onDec.bind(this, item._id, -1, item.qty)}
                                >-</Button>
                                <Button 
                                    bsStyle="default" 
                                    bsSize="small"
                                    onClick={this.onInc.bind(this, item._id, 1)}
                                >+</Button>
                                <span>     </span>
                                <Button 
                                    bsStyle="danger" 
                                    bsSize="small"
                                    onClick={this.onDelete.bind(this, item._id)}
                                >Delete</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                </Panel>
            )
        })
        return (
            <Panel header="Cart" bsStyle="primary">
                {list}
                <Row>
                    <Col xs={12}>
                    <h6>Total amount: {toDollars(this.props.total)}</h6>
                    <Button 
                        bsSize="small" 
                        bsStyle="success"
                        onClick={this.open.bind(this)}
                    >
                        Proceed to Checkout
                    </Button>
                    </Col>
                </Row>
                    <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Shopping Cart</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <h6>Your order is complete!</h6>
                      <p>You will recieve an email shortly confirming your order.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Col xs={6}>
                            <h6>Total: {toDollars(this.props.total)}</h6>
                        </Col>
                        <Button onClick={this.close.bind(this)}>Close</Button>
                    </Modal.Footer>
                    </Modal>
            </Panel>
        )
    }
    componentDidMount () {
        // this.props.addItem({title:'test', _id: '23'})
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart,
        total: state.cart.total
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addItem,
        deleteItem,
        updateCart
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)