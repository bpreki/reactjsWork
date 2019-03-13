import React, { Component } from 'react'

class Container1 extends Component {
    constructor(props){
        super(props)

        this.state = {
            stateprop1: "our initial state"
        }
    }


    render() {
        return (
            <div>
                {this.props.ide}<br />
                {this.props.lang}<br />
                {this.state.stateprop1}
            </div>
        )
    }
}
export default Container1;