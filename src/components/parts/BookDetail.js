import React, {Component} from 'react'

class BookDetail extends Component {
    render() {
        const {title, price} = this.props
        return (
            <li>
                Title: {title} <br/>
                Price: {price}
            </li>
        )
    }
}

export default BookDetail