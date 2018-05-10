import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state = {
      init: 0
    }
    this.add = this.add.bind(this);
    this.sub = this.sub.bind(this);
  }
  initialState(){
    return {
      init: 0
    }
  }
  add(){
    this.setState({
      init: this.state.init + 1
    })
  }
  sub(){
    this.setState({
      init: this.state.init -1
    })
  }
  render() {
    return (
     <div>
       <h1>Scoreboard</h1>
       <div>
         Luis
       </div>
       <div><button onClick = {this.add}>+</button></div>
       <div>{this.state.init}</div>
       <div><button onClick = {this.sub}>-</button></div>
     </div>
    );
  }
}

export default App;
