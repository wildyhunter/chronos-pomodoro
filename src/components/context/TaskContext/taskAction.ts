import { TaskModel } from '../../../models/TaskModel';

export enum TaskActionTypes {
    START_TASK = 'START_TASK',
    INTERRUPT_TASK = 'INTERRUPT_TASK',
    RESET_STATE = 'RESET_STATE',
}

export type TaskActionModelWithPayload = {
    type: TaskActionTypes.START_TASK;
    payload: TaskModel;
};

export type TaskActionModelWithOutPayload =
    | { type: TaskActionTypes.RESET_STATE }
    | { type: TaskActionTypes.INTERRUPT_TASK };

export type TaskActionModel =
    | TaskActionModelWithPayload
    | TaskActionModelWithOutPayload;
