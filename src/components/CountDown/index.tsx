import styles from './styles.module.css'

type ContainerProps = {
    formattedSecondsRemaining: string
}

export function CountDown({formattedSecondsRemaining}: ContainerProps) {
    return(
            <div className={styles.container}>{formattedSecondsRemaining}</div>
    )
}