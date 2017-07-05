import React from 'react';
import './App.css';
import CreateTask from './components/CreateTask';
import Tasks from './components/Tasks'


class App extends React.Component {
  render() {
    return (
      <div className="container-fluid" style={{maxWidth:'700px',margin:'50px auto'}}>
        <h1 style={{textAlign:'center',fontWeight:'bold',marginBottom:'30px'}}>Task Handler</h1>
        <CreateTask />
        <Tasks />
      </div>
    );
  }
}

export default App;
