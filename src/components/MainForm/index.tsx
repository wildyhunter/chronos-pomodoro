import { PlayCircleIcon } from 'lucide-react';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { useState } from 'react';

import styles from './styles.module.css';

export function MainForm() {
    const [taskName, setTaskName] = useState('');
    console.log(taskName);
    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleCreateNewTask} className={styles.form} action="">
            <div className={styles.formBox}>
                <DefaultInput
                    id="meuInput"
                    type="text"
                    labelText="Task"
                    placeholder="new task"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
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
