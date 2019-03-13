import React, { Component } from 'react'

class Container1 extends Component {
    render() {
        return (
            <div>
                {this.props.ide}<br />
                {this.props.lang}
            </div>
        )
    }
}
export default Container1;