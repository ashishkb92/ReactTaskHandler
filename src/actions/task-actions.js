import * as types from './action-types';

export const createTask = (task) => {
  return {
    type: types.CREATE_TASK,
    task
  };
}

export const editTask = (id) => {
  return {
    type: types.EDIT_TASK,
    id
  };
}

export const saveTask = (task) => {
  return {
    type: types.SAVE_TASK,
    task
  };
}

export const deleteTask = (id) => {
  return {
    type: types.DELETE_TASK,
    id
  };
}
