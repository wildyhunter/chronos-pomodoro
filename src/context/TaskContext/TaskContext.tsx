import { createContext } from "react";
import { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";
import { TaskActionModel } from "./taskAction";

export type TaskContextProps = {
    state: TaskStateModel;
    dispatch: React.Dispatch<TaskActionModel>;
}

const initialContextValues = { state: initialTaskState, dispatch: () => {} };

export const TaskContext = createContext<TaskContextProps>(initialContextValues);

