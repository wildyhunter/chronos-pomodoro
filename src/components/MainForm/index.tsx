import { PlayCircleIcon } from 'lucide-react';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';

import styles from './styles.module.css';

export function MainForm() {
    return (
        <form className={styles.form} action="">
            <div className={styles.formBox}>
                <DefaultInput id="meuInput" type="text" labelText="Task" />
            </div>

            <div className={styles.formBox}>
                <p>Lorem ipsum dolor sit amet.</p>
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
