import { useTaskContext } from '../context/TaskContext';

import styles from './styles.module.css'

export function CountDown() {
    const taskContext = useTaskContext();

    return(
            <div className={styles.container}>00:00</div>
    )
}