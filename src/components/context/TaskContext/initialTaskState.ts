import { TaskStateModel } from "../../../models/TaskStateModel";

export const initialTaskState: TaskStateModel = {
    tasks: [],
    secondsRemaining: 0,
    formattedSecondsRemaining: '00:00',
    activeTask: null,
    currentCycle: 0,
    config: {
        WorkTime: 0.1,
        ShortBreakTime: 1,
        LongBreakTime: 1,
    },
};