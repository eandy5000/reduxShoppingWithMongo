import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Panel, Col, Row, Well, Button, ButtonGroup, Label} from 'react-bootstrap'
import {addItem, deleteItem, updateCart} from '../actions/cartActions'
import {toDollars} from '../util/helper'

class Cart extends Component {
    onDelete(_id) {
        let cartArr = this.props.cart
        const delIndex = cartArr.findIndex((item) => item._id === _id)
        let cartAfterDelete = [...cartArr.slice(0, delIndex), ...cartArr.slice(delIndex + 1)]
        this.props.deleteItem(cartAfterDelete)
    }
    
    onInc (_id, unit) {
        console.log('wrk', _id, unit)
        this.props.updateCart(_id, unit)
    }

    onDec (_id, unit, qty) {
        console.log('wrk',_id, unit, qty)
        if (qty + unit <= 0) {
            console.log('zero', qty)
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
            </Panel>
        )
    }
    componentDidMount () {
        // this.props.addItem({title:'test', _id: '23'})
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart
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