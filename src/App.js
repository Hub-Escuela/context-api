import React from 'react';
import './App.css';
import Layout from './components/Layout';
import MyContent from './components/MyContent';

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
    const { user } = this.state;
    return (
      <div className="app">
        <Layout user={user}>
          <MyContent user={user}/>
        </Layout>
      </div>
    );
  }
}

export default App;
