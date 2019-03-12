import React, {
  Component
} from 'react';
import './App.css';

class App extends Component {

  render() {

      const var1 = {
        key1: 'some data',
        key2: 'even more data'
      }

      //     return (
      //       <div className="App">       DOSE NOT RENDER BECAUSE WHOLE OBJECTS CANNOT BE DISPLAYED 
      //       {this.var1}                 TO RENEDER YOU MUST ACCESS OBJECT KEYS SEPERATELY
      //       </div>
      //     );
      //   }
      // }

      return ( 
      <div className = "App" >
        <div>
          {var1.key1}
          <br />
          {var1.key2}
        </div>
      </div>
      );
  }
}

      export default App;
