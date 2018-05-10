import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state = {
      init: 0
    }
  }
  initialState(){
    return {
      init: 0
    }
  }
  render() {
    return (
     <div>
       <h1>Scoreboard</h1>
       <div>
         Luis
       </div>
       <div><button>+</button></div>
       <div>{this.state.init}</div>
       <div><button>-</button></div>
     </div>
    );
  }
}

export default App;
