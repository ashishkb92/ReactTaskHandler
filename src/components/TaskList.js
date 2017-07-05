import React from 'react';

class TaskList extends React.Component {
  constructor(props){
    super(props);
    this.state={
      inputText : props[props.id].text
    }
    this.handleEdit = this.handleEdit.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleEdit(e) {
    e.preventDefault();
    this.props.onEdit(this.props.id)
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.onDelete(this.props.id)
  }

  handleSave(e) {
    debugger;
    e.preventDefault();
    this.props.onSave(this.state.inputText,this.props.id)
  }

  handleChange(e){
    this.setState({
      inputText : e.target.value
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps[nextProps.id].text!== this.props[this.props.id].text) {
      this.setState({inputText:nextProps[nextProps.id].text})
    }
  }

  render() {
    let {isEditable} = this.props[this.props.id];
    let editButton = <button onClick={this.handleEdit}className="btn btn-warning">Edit</button>
    let saveButton = <button onClick={this.handleSave}className="btn btn-success" disabled={!this.state.inputText}>Save</button>
    var showButton = isEditable?saveButton:editButton;
    debugger;
    return(
      <form className="form-horizontal">
        <div className="form-group">
          <div className="col-md-10">
            <input
              type="text"
              className="form-control "
              value={this.state.inputText}
              disabled={!isEditable}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-md-1">
            {showButton}
          </div>
          <div className="col-md-1">
            <button
              className="btn btn-danger"
              onClick={this.handleDelete}
            >
            Delete
            </button>
          </div>
        </div>

      </form>
    )
  }
}

export default TaskList;
