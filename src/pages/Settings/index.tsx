import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../components/Templates/MainTemplate';
import { DefaultInput } from '../../components/DefaultInput';
import { DefaultButton } from '../../components/DefaultButton';
import { SaveIcon } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useTaskContext } from '../../context/TaskContext/useTaskContext';
import { showMessage } from '../../adapters/showMessage';
import { TaskActionTypes } from '../../context/TaskContext/taskAction';

import styles from '../../components/MainForm/styles.module.css';
import { toast } from 'react-toastify';

export function Settings() {
    const { state, dispatch } = useTaskContext();

    const workTimeinput = useRef<HTMLInputElement>(null);
    const shortBreakTimeInput = useRef<HTMLInputElement>(null);
    const longBreakTimeInput = useRef<HTMLInputElement>(null);

    function handleSaveSettings(
        e: React.MouseEvent<HTMLFormElement, MouseEvent>
    ) {
        e.preventDefault();
        toast.dismiss();

        const workTime = Number(workTimeinput.current?.value);
        const shortBreakTime = Number(shortBreakTimeInput.current?.value);
        const longBreakTime = Number(longBreakTimeInput.current?.value);

        if (workTime < 1 || workTime > 99) {
            showMessage.error('O tempo de foco deve ser entre 1 e 99 minutos');
        }
        if (shortBreakTime < 1 || shortBreakTime > 30) {
            showMessage.error(
                'O tempo de descanso curto deve ser entre 1 e 30 minutos'
            );
        }
        if (longBreakTime < 1 || longBreakTime > 60) {
            showMessage.error('O descanso longo deve ser entre 1 e 60 minutos');
        }

        dispatch({
            type: TaskActionTypes.CHANGE_SETTIGNS,
            payload: {
                WorkTime: workTime,
                ShortBreakTime: shortBreakTime,
                LongBreakTime: longBreakTime,
            },
        });
        showMessage.success('Configurações salvas com sucesso');
    }

    useEffect(() => {
        document.title = 'Setting - Chronos Pomodoro';
    }, []);

    return (
        <MainTemplate>
            <Container>
                <Heading>Configurações</Heading>
            </Container>

            <Container>
                <p style={{ textAlign: 'center' }}>
                    Modifique as configurações para tempo de foco, descanso
                    curto e descanso longo.
                </p>
            </Container>

            <Container>
                <form
                    action=""
                    className={styles.form}
                    onClick={handleSaveSettings}
                >
                    <div className={styles.formBox}>
                        <DefaultInput
                            id="workTime"
                            type="number"
                            labelText="Foco"
                            ref={workTimeinput}
                            defaultValue={state.config.WorkTime}
                        />
                    </div>
                    <div className={styles.formBox}>
                        <DefaultInput
                            id="shortBreakTime"
                            type="number"
                            labelText="Descanso Curto"
                            ref={shortBreakTimeInput}
                            defaultValue={state.config.ShortBreakTime}
                        />
                    </div>
                    <div className={styles.formBox}>
                        <DefaultInput
                            id="workTime"
                            type="number"
                            labelText="Descanso Longo"
                            ref={longBreakTimeInput}
                            defaultValue={state.config.LongBreakTime}
                        />
                    </div>
                    <div className={styles.formBox}>
                        <DefaultButton
                            icon={<SaveIcon />}
                            aria-label="Salvar Configurações"
                            title="Salvar Configurações"
                        />
                    </div>
                </form>
            </Container>
        </MainTemplate>
    );
}
