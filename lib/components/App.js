import React from 'react';

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
      <div>Hello from react {this.state.answer} test</div>
    )
  }
}

export default App;