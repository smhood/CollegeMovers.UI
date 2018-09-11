import React from 'react';
import { Button } from 'react-bootstrap';

class App extends React.Component {
  state = {
    answer: 42
  }

  asyncFunc = () => {
    return Promise.resolve(37);
  }

  async componentDidMount() {
    this.setState({
      answer: await this.asyncFunc()
    })
  }

  render(){
    return(
      <div className="grid-container">
        <div class="grid-item item1">1</div>
        <div class="grid-item item2">2</div>
        <div class="grid-item item3">3</div>  
        <div class="grid-item item4">4</div>
        <div class="grid-item item5">5</div>      
      </div>
    )
  }
}

export default App;