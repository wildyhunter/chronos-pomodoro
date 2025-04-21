import { TaskStateModel } from "../../../models/TaskStateModel";

export const initialTaskState: TaskStateModel = {
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