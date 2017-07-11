import React, {Component} from 'react'

import Footer from './footer'
import Menu from './menu'

class Main extends Component {
    render () {
        return (
            <div>
                <Menu />
                    {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default Main
