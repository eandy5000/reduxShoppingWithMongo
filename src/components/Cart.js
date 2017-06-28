import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Panel, Col, Row, Well, Button} from 'react-bootstrap'
import {addItem} from '../actions/cartActions'

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
                <Panel key={item.id}>
                    <Row>
                        <Col xs={12} sm={4}>
                        <h6>{item.title}</h6>
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
        this.props.addItem({title:'test', id: '23'})
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart
    }
}

export default connect(mapStateToProps, {addItem})(Cart)