import React from 'react';
import './App.css';
import UserCard from './Components/UserCard';

class App extends React.Component {
  
  state = {
    user: []
  }

  // commented out to be moved to UserCard component
  componentDidMount() {
    fetch('https://api.github.com/users')
      .then(res => res.json())
      .then(userData => this.setState({ user: userData }))
      .catch(err => console.log(err, 'error'))
  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React User Card assignment</h1>
          <UserCard userData={this.state.user}/>
        </header>
      </div>
      )
  };
}

export default App;
