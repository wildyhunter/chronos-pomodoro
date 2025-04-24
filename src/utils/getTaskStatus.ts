import { TaskModel } from "../models/TaskModel";

export function getTaskStatus(task: TaskModel, activeTask: TaskModel) {
    if (task.completeDate) return 'Completed';
    if (task.interruptDate) return 'Interrupted';
    if ( task.id === activeTask?.id ) return 'Em progresso';
    return 'Abandonada';
}