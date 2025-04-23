import { TaskStateModel } from '../../../models/TaskStateModel';
import { formatSecondsToMinutes } from '../../utils/formateSecondsToMinutes';
import { getNextCycle } from '../../utils/getNextCycle';
import { TaskActionModel, TaskActionTypes } from './taskAction';

export function taskReducer(state: TaskStateModel, action: TaskActionModel) {
    switch (action.type) {
        case TaskActionTypes.START_TASK: {
            const newTask = action.payload;
            const nextCycle = getNextCycle(state.currentCycle);
            const secondsRemaining = newTask.duration * 60;

            return {
                ...state,
                activeTask: newTask,
                currentCycle: nextCycle,
                secondsRemaining,
                formattedSecondsRemaining:
                    formatSecondsToMinutes(secondsRemaining),
                tasks: [...state.tasks, newTask],
            };
        }

        case TaskActionTypes.INTERRUPT_TASK: {
            return {
                ...state,
                activeTask: null,
                secondsRemaining: 0,
                formattedSecondsRemaining: '00:00',
                tasks: state.tasks.map((task) => {
                    if (task.id === state.activeTask?.id) {
                        return {
                            ...task,
                            interruptDate: Date.now(),
                        };
                    }
                    return task;
                }),
            };
        }

        case TaskActionTypes.COMPLETE_TASK: {
            return {
                ...state,
                activeTask: null,
                secondsRemaining: 0,
                formattedSecondsRemaining: '00:00',
                tasks: state.tasks.map((task) => {
                    if (task.id === state.activeTask?.id) {
                        return {
                            ...task,
                            completeDate: Date.now(),
                        };
                    }
                    return task;
                }),
            };
        }

        case TaskActionTypes.RESET_STATE: {
            return state;
        }

        case TaskActionTypes.COUNT_DOWN: {
            const secondsRemaining = action.payload.secondsRemaining;
            const formattedSecondsRemaining =
                formatSecondsToMinutes(secondsRemaining);

            return {
                ...state,
                secondsRemaining,
                formattedSecondsRemaining,
            };
        }
    }
}
