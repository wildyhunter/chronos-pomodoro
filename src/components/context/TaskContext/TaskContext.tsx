import { createContext } from "react";
import { TaskStateModel } from "../../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskstate";


export type TaskContextProps = {
    state: TaskStateModel;
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
}

const initialContextValues = { state: initialTaskState, setState: () => {} };

export const TaskContext = createContext<TaskContextProps>(initialContextValues);

