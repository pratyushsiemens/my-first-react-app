import React from 'react';
import ReactDOM from 'react-dom/client';

class ScoreBoard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      score: 0
    }
  }

  handleClick(x) {
    this.setState({score: this.state.score + x})
  }

  render() {
    return (
      <div>
        <h1>{this.state.score}</h1>
        <button onClick={()=>this.handleClick(1)}>+</button>
        <button onClick={()=>this.handleClick(-1)}>-</button>
      </div>
      
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ScoreBoard />
  </React.StrictMode>
);

