import { TaskModel } from './TaskModel';

export type TaskStateModel = {
    tasks: TaskModel[];
    secondsRemaining: number;
    formattedSecondsRemaining: string;
    activeTask: TaskModel | null;
    currentCycle: number;
    config: {
        WorkTime: number;
        ShortBreakTime: number;
        LongBreakTime: number;
    }
};
