import React, { Component } from 'react'

class Container1 extends Component {
    constructor(props){
        super(props)

        this.state = {
            stateprop1: "our initial state",
            stateprop2: 5
        }
    }
 
    changeState = () => (
        this.setState({stateprop2: this.state.stateprop2 + 1}
        ))
    changeState2 = () => (
        this.setState({stateprop1: this.state.stateprop1 + "L"}
        ))
    multiState = () => (
        this.setState({stateprop1: this.state.stateprop1 + "A LA",
                        stateprop2: this.state.stateprop2 + 3}
                        ))
 

    render() {
        return (
            <div>
                <button onClick={()=> this.changeState()}> Change State </button>
                <button onClick={()=> this.changeState2()}> Change State </button>
                <button onClick={()=> this.multiState()}> MAGIC !! </button>
                <br /> 
                state 1: {this.state.stateprop2}
                <br />
                state 2: {this.state.stateprop1}
            </div>
        )
    }
}
export default Container1;