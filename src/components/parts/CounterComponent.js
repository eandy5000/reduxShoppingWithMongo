import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCount, subCount, resetCount } from '../../actions/countActions'


class CounterComponent extends Component {

    render() {
        return (
            <div>
                <h1
                    style={{color: 'red'}}
                >Test</h1>
                {this.props.count} <br/>
                <button
                    onClick={this.props.addCount.bind(this)}
                >Add</button>
                
                <button
                    onClick={this.props.subCount.bind(this)}
                    style={{marginLeft: '1em'}}
                >Subtract</button>
                
                <button
                    onClick={this.props.resetCount.bind(this)}
                    style={{marginLeft: '1em'}}
                >Reset</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent)

