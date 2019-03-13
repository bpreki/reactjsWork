import React, { Component } from 'react';
import Component1 from './functional/component1'
import Container1 from './containers/container1'

class App extends Component {
  // render() {
  //   if(true) {
  //     return (
  //       <div className="App">
  //       React 
  //       Condition 1
  //       </div>
  //     )
  //   }else{                                   IF ELSE STATEMENT TO PERFORM CONDITIONAL RENDERING 

  //     return (                                      ****BAD PRACTICE****
  //       <div className="App">
  //       React 
  //       Condition 2
  //       </div>
  //     )}
  // }
                                       //        CONDITIONAL RENDERING METHOD 
                                       //       **BEST PRACTICE (READABILITY)**
  render(){
    return(
      <div> 
        React                                     
        {true                                        
          ? <div> Condition 1 </div> 
          : <div> React Condition 2 </div> 
        }
      </div>
    )}
  }

 

  // render(){
  //   //                                        NESTED CONDITIONAL RENDERING METHOD 
  //   return(
  //     <div> 
  //       React                              
  //       {true
  //         ? true ? <div> Condition 1 </div> : <div> condition 3</div>
  //         : true ? <div> Condition 2 </div> : <div> condition 4 </div>
  //       }
  //     </div>
  //   )}
  // }

//   renderFunction1 = () => {
//     if(true) {
//       return(
//         <div>
//           condition 1
//         </div>
//       )
//     } else {
//       return (
//         <div> 
//           condition 2
//         </div>
//       )
//     }
//   }

//   render () {
//     return (
//       <div>
//         React
//       <div>
//         Div 1
//       </div>
//       {this.renderFunction1()}
//       <div>
//         Div 2
//       </div>
//       {this.renderFunction1()}
//       </div>
//     )
//   }
// }


export default App;
