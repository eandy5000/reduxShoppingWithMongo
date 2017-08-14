import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class App extends Component {
    render() {
        return (
            <div>
                <h1>Test</h1>
                {this.props.count}
            </div>)
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        
    })
}

export default connect(mapStateToProps)(App)

