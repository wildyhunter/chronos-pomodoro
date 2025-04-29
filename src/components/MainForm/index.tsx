import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { useRef } from 'react';
import { TaskModel } from '../../models/TaskModel';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { showMessage } from '../../adapters/showMessage';
import { Tips } from '../Tips';
import { useTaskContext } from '../../context/TaskContext/useTaskContext';
import { TaskActionTypes } from '../../context/TaskContext/taskAction';

import styles from './styles.module.css';
import { toast } from 'react-toastify';

export function MainForm() {
    const { state, dispatch } = useTaskContext();
    const taskNameInput = useRef<HTMLInputElement>(null);
    const form = useRef<HTMLFormElement>(null);
    const nextCycle = getNextCycle(state.currentCycle);
    const cycleType = getNextCycleType(nextCycle);
    const lastTask = state.tasks[state.tasks.length - 1]?.name || '';
    
    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
        toast.dismiss();
        event.preventDefault();

        const taskName = taskNameInput.current?.value.trim();

        if (taskNameInput.current === null) return;
        if (!taskName) {
            showMessage.warn('Digite o nome da tarefa');
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

        showMessage.success(`Tarefa ${taskName} iniciada.`);
    }

    function handleIterruptTask() {
        toast.dismiss();
        dispatch({
            type: TaskActionTypes.INTERRUPT_TASK,
        });

        showMessage.error(`Tarefa ${state.activeTask?.name} interrompida.`);
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
                    defaultValue={lastTask}
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
