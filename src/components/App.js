import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCount, subCount, resetCount } from '../actions/countActions'

import CounterComponent from './parts/CounterComponent'


class App extends Component {

    render() {
        return (
            <div>
                <CounterComponent />
                <CounterComponent />
            </div>)
    }
}

function mapStateToProps(state) {
    return {
        count: state.count.count
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addCount,
        subCount,
        resetCount
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

