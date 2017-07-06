import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as taskActions from '../actions/task-actions';
import TaskList from './TaskList';
import toastr from 'toastr';



class Tasks extends React.Component{
  constructor(props) {
    super(props)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleEdit(id) {
    this.props.actions.editTask(id)
  }

  handleDelete(id) {
    this.props.actions.deleteTask(id);
    toastr.options.timeOut = 3;
    toastr.error('Task Deleted');
  }

  handleSave(name,text,id) {
    let task ={};
    task[id] = {
      id,
      name,
      text,
      isEditable : false,
      createdOn :  this.props.tasks[id].createdOn,
      updatedOn : new Date()
    }
    this.props.actions.saveTask(task);
    toastr.options.timeOut = 3;
    toastr.success('Task Saved');
  }

  render() {
    const {tasks}=this.props;

    let renderTask = Object.keys(tasks).map((key)=>
        <TaskList key={key} id={key} {...tasks} onEdit={this.handleEdit} onSave={this.handleSave} onDelete={this.handleDelete}/>
    )

    return (
      <div >
          {renderTask}
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    tasks: state.tasks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(taskActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
