import { useReducer } from 'react';
import { TaskContext } from './TaskContext';
import { initialTaskState } from './initialTaskState';
import { taskReducer } from './taskReducer';

type TaskProviderProps = {
    children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskProviderProps) {
    const [state, dispatch] = useReducer(taskReducer, initialTaskState);

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
}
