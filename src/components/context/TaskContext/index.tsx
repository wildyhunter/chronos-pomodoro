import { createContext, use, useContext } from "react";
import { TaskStateModel } from "../../../models/TaskStateModel";

const initialState: TaskStateModel = {
    tasks: [],
    secondsRemaining: 0,
    formattedSecondsRemaining: '',
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
    return (
        <TaskContext.Provider value={...initialContextValues}>
            {children}
        </TaskContext.Provider>
    );
}

export function useTaskContext() {
    return useContext(TaskContext);
}