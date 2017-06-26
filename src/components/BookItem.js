import React, {Component} from 'react'
import {toDollars} from '../util/helper'
import {Button, Well, Row, Col} from 'react-bootstrap'

class BookItem extends Component {
    render () {
        const {price, title, id} = this.props
        return (
            <Well>
                <Row>
                    <Col xs={12}>
                        <h6>{title}</h6>
                        <p>{toDollars(price)}</p>
                        <Button bsStyle="primary">Buy Me!</Button>
                    </Col>
                </Row>
            </Well>
        )
    }
}

export default BookItem