import { useEffect, useReducer } from 'react';
import { TaskContext } from './TaskContext';
import { initialTaskState } from './initialTaskState';
import { taskReducer } from './taskReducer';
import { TimerWorkerManager } from '../../../workes/timerWorkerManager';
import { TaskActionTypes } from './taskAction';

type TaskProviderProps = {
    children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskProviderProps) {
    const [state, dispatch] = useReducer(taskReducer, initialTaskState);

    const worker = TimerWorkerManager.getInstance();

    worker.onmessege((e) => {
        const countDownSeconds = e.data;
        console.log(countDownSeconds);

        if (countDownSeconds <= 0) {
            dispatch({ type: TaskActionTypes.COMPLETE_TASK });
            worker.terminate();
            return;
        } else {
            dispatch({
                type: TaskActionTypes.COUNT_DOWN,
                payload: { secondsRemaining: countDownSeconds },
            });
        }
    });

    useEffect(() => {
        if (!state.activeTask) {
            console.log('worker terminado or falta de active task');
            worker.terminate();
        }
        worker.postMessage(state);
    }, [state, worker]);

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
}
