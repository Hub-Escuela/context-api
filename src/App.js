import React from 'react';
import './App.css';
import Layout from './components/Layout';
import MyContent from './components/MyContent';
import UserContext from './context/UserContext';

class App extends React.Component {
  state = {
    user: {
      avatar:
        'https://picsum.photos/100',
      name: 'Random',
      email: 'someone@random.com',
      city: 'Some Location'
    }
  };
  render() {
    return (
      <div className="app">
        <UserContext.Provider value={this.state.user}>
          <Layout>
            <MyContent/>
          </Layout>
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;