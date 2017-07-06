import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as taskActions from '../actions/task-actions';
import it from '../helpers/idGenerator';
import toastr from 'toastr';


class CreateTask extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      task : {},
      inputText: "",
      inputName : ""
    }

    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let task={};
    let id = it.next().value
    task[id] = {
      id ,
      name : this.state.inputName,
      text : this.state.inputText,
      isEditable:false,
      createdOn : new Date(),
      updatedOn : "Not yet updated"
    }
    this.props.actions.createTask(task);
    this.setState({
      inputText : "",
      inputName : ""
    });
    toastr.options.timeOut = 3;
    toastr.success('Task Created');
  }

  handleChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render() {
    return (
      <form className="form-horizontal" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label className="control-label col-md-2" >Name:</label>
          <div className="col-md-10">
            <input
              name="inputName"
              type="text"
              className="form-control"
              value={this.state.inputName}
              onChange={this.handleChange}
            />
          </div >
        </div>
        <div className="form-group">
          <label className="control-label col-md-2" >Description:</label>
          <div className="col-md-10">
            <textarea
              name="inputText"
              rows="2"
              className="form-control"
              value={this.state.inputText}
              onChange={this.handleChange}>
            </textarea>
          </div >
        </div>
        <div className="form-group">
          <div className="col-md-offset-2 col-md-10">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.handleSubmit}
              disabled={!this.state.inputText||!this.state.inputName}
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
