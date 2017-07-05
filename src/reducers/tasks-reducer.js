import * as types from '../actions/action-types';

export default (tasks = {}, action) => {
  debugger;
  var newTasks={...tasks}
  switch (action.type) {
    case types.CREATE_TASK:
      return {...tasks,...action.task};
    case types.EDIT_TASK:
      newTasks[action.id].isEditable=true
      return  {...newTasks}
    case types.SAVE_TASK:
      return {...tasks,...action.task};
    case types.DELETE_TASK:
      delete newTasks[action.id]
      return  {...newTasks}
    default:
      return tasks;
  }
};
