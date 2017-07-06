import React from 'react';
import './App.css';
import CreateTask from './components/CreateTask';
import Tasks from './components/Tasks'


class App extends React.Component {
  constructor(){
    super();

    this.state={
      page : 1
    }

    this.handlePageChange=this.handlePageChange.bind(this)
  }

  handlePageChange(){
    const {page} = this.state;
    if (page===1){
      this.setState({page:2})
    }else {
      this.setState({page:1})
    }
  }

  render() {
    let showOnScreen;
    if (this.state.page===1){
      showOnScreen =  <div className="container-fluid" style={{maxWidth:'700px',margin:'50px auto'}}>
                        <h1 style={{textAlign:'center',fontWeight:'bold',marginBottom:'30px'}}>Task Handler</h1>
                        <CreateTask />
                        <div style={{textAlign:'center'}}>
                          <button className="btn btn-info" onClick={this.handlePageChange}>Show All Tasks</button>
                        </div>
                      </div>
    }else{
      showOnScreen = <div className="container-fluid" style={{maxWidth:'700px',margin:'50px auto'}}>
                       <h1 style={{textAlign:'center',fontWeight:'bold',marginBottom:'30px'}}>Task List</h1>
                       <Tasks />
                       <div style={{textAlign:'center'}}>
                           <button className="btn btn-info" onClick={this.handlePageChange}>Back</button>
                       </div>
                     </div>

    }

    return (
      showOnScreen
    );
  }
}

export default App;
