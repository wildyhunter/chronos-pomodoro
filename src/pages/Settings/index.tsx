import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../components/Templates/MainTemplate';
import styles from '../../components/MainForm/styles.module.css';
import { DefaultInput } from '../../components/DefaultInput';
import { DefaultButton } from '../../components/DefaultButton';
import { SaveIcon } from 'lucide-react';

export function Settings() {
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
                <form action="" className={styles.form}>
                    <div className={styles.formBox}>
                        <DefaultInput
                            id="workTime"
                            type="number"
                            labelText="Foco"
                        />
                    </div>
                    <div className={styles.formBox}>
                        <DefaultInput
                            id="shortBreakTime"
                            type="number"
                            labelText="Descanso Curto"
                        />
                    </div>
                    <div className={styles.formBox}>
                        <DefaultInput
                            id="workTime"
                            type="number"
                            labelText="Descanso Longo"
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
