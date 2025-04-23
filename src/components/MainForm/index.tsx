import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { useContext, useRef } from 'react';
import { TaskModel } from '../../models/TaskModel';
import { TaskContext } from '../context/TaskContext/TaskContext';
import { getNextCycle } from '../utils/getNextCycle';
import { getNextCycleType } from '../utils/getNextCycleType';
import { TaskActionTypes } from '../context/TaskContext/taskAction';

import styles from './styles.module.css';
import { Tips } from '../Tips';

export function MainForm() {
    const { state, dispatch } = useContext(TaskContext);
    const taskNameInput = useRef<HTMLInputElement>(null);
    const form = useRef<HTMLFormElement>(null);
    const nextCycle = getNextCycle(state.currentCycle);
    const cycleType = getNextCycleType(nextCycle);

    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (taskNameInput.current === null) return;

        const taskName = taskNameInput.current.value.trim();

        if (!taskName) {
            alert('Digite o nome da tarefa');
            return;
        }

        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskName,
            startDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            duration: state.config[cycleType],
            type: cycleType,
        };

        dispatch({
            type: TaskActionTypes.START_TASK,
            payload: newTask,
        });

        const worker = new Worker(
            new URL('./../../workes/timerWorker.js', import.meta.url)
        );

        worker.postMessage(
            'Olá mundo'
            // duration: newTask.duration,
            // startDate: newTask.startDate,
            // type: cycleType,
);

    }

    function handleIterruptTask() {
        dispatch({
            type: TaskActionTypes.INTERRUPT_TASK,
        });
    }

    return (
        <form
            onSubmit={handleCreateNewTask}
            className={styles.form}
            action=""
            ref={form}
        >
            <div className={styles.formBox}>
                <DefaultInput
                    id="meuInput"
                    type="text"
                    labelText="Task"
                    placeholder="new task"
                    ref={taskNameInput}
                    disabled={!!state.activeTask}
                />
            </div>

            <div className={styles.formBox}>
                <Tips cycleType={cycleType} />
            </div>

            {state.currentCycle > 0 && (
                <div className={styles.formBox}>
                    <Cycles />
                </div>
            )}

            <div className={styles.formBox}>
                {!state.activeTask && (
                    <DefaultButton
                        aria-label="Iniciar uma nova tarefa"
                        title="Iniciar uma nova tarefa"
                        type="submit"
                        icon={<PlayCircleIcon />}
                        key={'startTask'}
                    />
                )}
                {!!state.activeTask && (
                    <DefaultButton
                        aria-label="Interromper tarefa atual"
                        title="Interromper tarefa atual"
                        type="button"
                        key={'interruptTask'}
                        color="red"
                        icon={<StopCircleIcon />}
                        onClick={handleIterruptTask}
                    />
                )}
            </div>
        </form>
    );
}
