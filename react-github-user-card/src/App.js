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


/*import React from 'react';

class UserCard extends React.Component(props) {
    constructor() {
        super()        
    }
    state = props.userData;
    
    // componentDidMount

    render(){
        console.log(props,'inside constructor')
        return(
        <div>{props.userData.map(user => (
            
            <div key={user.id} className='user-card'>
                <div>
                    <img src={user.avatar_url} alt='user avatar' width='200'/>
                     <h1>{user.login}</h1>
                 </div>
                {/}
                </div>
            
                ))}</div>
            )
        }
        
    }
    
    export default UserCard; */ 