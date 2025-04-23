import { useEffect, useReducer, useRef } from 'react';
import { TaskContext } from './TaskContext';
import { initialTaskState } from './initialTaskState';
import { taskReducer } from './taskReducer';
import { TimerWorkerManager } from '../../../workes/timerWorkerManager';
import { TaskActionTypes } from './taskAction';
import { loadBeep } from '../../utils/LoadBeep';

type TaskProviderProps = {
    children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskProviderProps) {
    const [state, dispatch] = useReducer(taskReducer, initialTaskState);
    let playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null);

    const worker = TimerWorkerManager.getInstance();

    worker.onmessege((e) => {
        const countDownSeconds = e.data;
        console.log(countDownSeconds);

        if (countDownSeconds <= 0) {
            if (playBeepRef.current) {
                playBeepRef.current();
                playBeepRef.current = null;
            }
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
            worker.terminate();
        }
        worker.postMessage(state);
    }, [state, worker]);

    useEffect(() => {
        if (state.activeTask && playBeepRef.current === null) {
            playBeepRef.current = loadBeep();
        } else {
            playBeepRef.current = null;
        }
    }, [state.activeTask]);
    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
}
