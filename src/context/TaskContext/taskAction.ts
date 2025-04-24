import { TaskModel } from '../../models/TaskModel';

export enum TaskActionTypes {
    START_TASK = 'START_TASK',
    INTERRUPT_TASK = 'INTERRUPT_TASK',
    RESET_STATE = 'RESET_STATE',
    COUNT_DOWN = 'COUNT_DOWN',
    COMPLETE_TASK = 'COMPLETE_TASK',
}

export type TaskActionModelWithPayload =
    | {
          type: TaskActionTypes.START_TASK;
          payload: TaskModel;
      }
    | {
          type: TaskActionTypes.COUNT_DOWN;
          payload: { secondsRemaining: number };
      };

export type TaskActionModelWithOutPayload =
    | { type: TaskActionTypes.RESET_STATE }
    | { type: TaskActionTypes.INTERRUPT_TASK }
    | { type: TaskActionTypes.COMPLETE_TASK };

export type TaskActionModel =
    | TaskActionModelWithPayload
    | TaskActionModelWithOutPayload;
