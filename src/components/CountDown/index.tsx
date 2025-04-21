import { useTaskContext } from '../context/TaskContext';

import styles from './styles.module.css'

export function CountDown() {
    const { state } = useTaskContext();
    console.log(state)

    return(
            <div className={styles.container}>{state.formattedSecondsRemaining}</div>
    )
}