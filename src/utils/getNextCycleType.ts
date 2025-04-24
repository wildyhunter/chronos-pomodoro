import { TaskModel } from '../models/TaskModel';

export function getNextCycleType(currentCycle: number): TaskModel['type'] {
    if (currentCycle === 8) return 'LongBreakTime';
    return currentCycle % 2 === 0 ? 'ShortBreakTime' : 'WorkTime';
}
