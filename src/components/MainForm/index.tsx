import { PlayCircleIcon } from 'lucide-react';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { useContext, useRef } from 'react';
import { TaskModel } from '../../models/TaskModel';
import { TaskContext } from '../context/TaskContext/TaskContext';
import { getNextCycle } from '../utils/getNextCycle';
import { getNextCycleType } from '../utils/getNextCycleType';

import styles from './styles.module.css';

export function MainForm() {
    const {state, setState } = useContext(TaskContext);
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
            duration: 1,
            type: cycleType,
        };

        const secondsRemaining = newTask.duration * 60;

        setState((prevState) => {
            return {
                ...prevState,
                config: { ...prevState.config },
                activeTask: newTask,
                currentCycle: nextCycle,
                secondsRemaining,
                formattedSecondsRemaining: '00:00',
                tasks: [...prevState.tasks, newTask],
            };
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
                />
            </div>

            <div className={styles.formBox}>
                <p>Próximo intervalo é de 25</p>
            </div>

            <div className={styles.formBox}>
                <Cycles />
            </div>

            <div className={styles.formBox}>
                <DefaultButton icon={<PlayCircleIcon />} />
            </div>
        </form>
    );
}
