import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as taskActions from '../actions/task-actions';
import it from '../helpers/idGenerator'


class CreateTask extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      task : {},
      inputText: ""
    }

    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let task={};
    let id = it.next().value
    task[id] = {
      text : this.state.inputText,
      isEditable:false
    }
    this.props.actions.createTask(task);
    this.setState({
      inputText : ""
    });
  }

  handleChange(e){
    this.setState({
      inputText : e.target.value
    })
  }

  render() {
    return (
      <form className="form-horizontal" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <div className="col-md-10">
            <input
              type="text"
              className="form-control"
              value={this.state.inputText}
              onChange={this.handleChange}
            />
          </div >
          <div className="col-md-2">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.handleSubmit}
              disabled={!this.state.inputText}
            >
            Create Task
            </button>
          </div>
        </div>
      </form>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(taskActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(CreateTask);
