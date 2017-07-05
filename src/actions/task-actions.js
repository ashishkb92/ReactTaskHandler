import * as types from './action-types';

export const createTask = (task) => {
  debugger;
  return {
    type: types.CREATE_TASK,
    task
  };
}

export const editTask = (id) => {
  debugger;
  return {
    type: types.EDIT_TASK,
    id
  };
}

export const saveTask = (task) => {
  debugger;
  return {
    type: types.SAVE_TASK,
    task
  };
}

export const deleteTask = (id) => {
  debugger;
  return {
    type: types.DELETE_TASK,
    id
  };
}
