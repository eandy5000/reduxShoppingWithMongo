import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Panel, Col, Row, Well, Button, ButtonGroup, Label} from 'react-bootstrap'
import {addItem} from '../actions/cartActions'
import {toDollars} from '../util/helper'

class Cart extends Component {
    render() {
        console.log(this.props.cart)
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
                            <h6>Qty: <Label bsStyle="primary"></Label></h6>
                        </Col>
                        <Col xs={6} sm={4}>
                            <ButtonGroup style={{minWidth: '300px'}}>
                                <Button bsStyle="default" bsSize="small">-</Button>
                                <Button bsStyle="default" bsSize="small">+</Button>
                                <span>     </span>
                                <Button bsStyle="danger" bsSize="small">Delete</Button>
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
        addItem
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)