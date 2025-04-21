import { createContext, useState, useContext } from "react";
import { TaskStateModel } from "../../../models/TaskStateModel";

const initialState: TaskStateModel = {
    tasks: [],
    secondsRemaining: 0,
    formattedSecondsRemaining: '21:00',
    activeTask: null,
    currentCycle: 0,
    config: {
        WorkTime: 25,
        ShortBreakTime: 5,
        LongBreakTime: 15,
    },
};

type TaskContextProps = {
    state: TaskStateModel;
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
}

const initialContextValues = { state: initialState, setState: () => {} };

export const TaskContext = createContext<TaskContextProps>(initialContextValues);

type TaskProviderProps = {
    children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskProviderProps) {
    const [state, setState] = useState(initialState);

    return (
        <TaskContext.Provider value={{state, setState}}>
            {children}
        </TaskContext.Provider>
    );
}

export function useTaskContext() {
    return useContext(TaskContext);
}