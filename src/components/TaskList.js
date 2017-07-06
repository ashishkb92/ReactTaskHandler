import React from 'react';

class TaskList extends React.Component {
  constructor(props){
    super(props);
    this.state={
      inputName : props[props.id].name,
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
    e.preventDefault();
    this.props.onSave(this.state.inputName,this.state.inputText,this.props.id)
  }

  handleChange(e){
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps[nextProps.id].text!== this.props[this.props.id].text) {
      this.setState({inputText:nextProps[nextProps.id].text})
    }
  }

  render() {
    let {isEditable, createdOn, updatedOn} = this.props[this.props.id];
    let editButton = <button onClick={this.handleEdit}className="btn btn-warning">Edit</button>
    let saveButton = <button onClick={this.handleSave}className="btn btn-success" disabled={!this.state.inputText||!this.state.inputName}>Save</button>
    var showButton = isEditable?saveButton:editButton;

    return(
      <div className="taskbox">
        <form className="form-horizontal">
          <div className="form-group">
            <label className="control-label col-md-2" >Name:</label>
            <div className="col-md-10">
              <input
                name="inputName"
                type="text"
                className="form-control "
                value={this.state.inputName}
                disabled={!isEditable}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-md-2" >Description:</label>
            <div className="col-md-10">
              <textarea
                name="inputText"
                rows="2"
                className="form-control"
                disabled={!isEditable}
                value={this.state.inputText}
                onChange={this.handleChange}>
              </textarea>
            </div >
          </div>

          <div className="form-group">
            <label className="control-label col-md-2" >Created On:</label>
            <div className="col-md-10">
               <p className="form-control-static">{createdOn.toLocaleString()}</p>
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-md-2" >Last Updated:</label>
            <div className="col-md-10">
               <p className="form-control-static">{updatedOn.toLocaleString()}</p>
            </div>
          </div>

          <div className="form-group">
            <div className="col-md-offset-2 col-md-10">
              <div className="col-md-2">
                {showButton}
              </div>
              <div className="col-md-2">
                <button
                  className="btn btn-danger"
                  onClick={this.handleDelete}
                >
                Delete
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default TaskList;
