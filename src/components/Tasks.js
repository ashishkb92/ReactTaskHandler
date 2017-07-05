import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as taskActions from '../actions/task-actions';
import TaskList from './TaskList'



class Tasks extends React.Component{
  constructor(props) {
    super(props)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleEdit(id){
    this.props.actions.editTask(id)
  }

  handleDelete(id){
    this.props.actions.deleteTask(id)
  }

  handleSave(text,id){
    let task ={};
    task[id] = {
      isEditable:false,
      text
    }
    this.props.actions.saveTask(task)
  }

  render() {
    const {tasks}=this.props;

    let renderTask = Object.keys(tasks).map((key)=>
        <TaskList key={key} id={key} {...tasks} onEdit={this.handleEdit} onSave={this.handleSave} onDelete={this.handleDelete}/>
    )

    debugger;
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
