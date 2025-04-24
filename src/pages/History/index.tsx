import { TrashIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../components/Templates/MainTemplate';
import { useTaskContext } from '../../context/TaskContext/useTaskContext';

import styles from './styles.module.css';

export function History() {
    const { state , dispatch } = useTaskContext();
console.log(state)
    return (
        <MainTemplate>
            <Container>
                <Heading>
                    <span>History</span>
                    <span className={styles.buttonContaine}>
                        <DefaultButton
                            icon={<TrashIcon />}
                            color="red"
                            area-label="Limpar histórico"
                            title="Limpar histórico"
                        />
                    </span>
                </Heading>
            </Container>

            <Container>
                {state.tasks.length <= 0 ? (
                    <p className={styles.noTasks}>
                        Voce ainda nao tem nada no historico
                    </p>
                ) : (
                    <div className={styles.responsiveTable}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Tarefa</th>
                                    <th>Duração</th>
                                    <th>Data</th>
                                    <th>Status</th>
                                    <th>Tipo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {state.tasks.map((task) => (
                                    <tr key={task.id}>
                                        <td>{task.name}</td>
                                        <td>{task.duration} minutos</td>
                                        <td>
                                            {new Date(
                                                task.startDate
                                            ).toLocaleDateString()}
                                        </td>
                                        <td>{task.interruptDate}</td>
                                        <td>{task.type}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </Container>
        </MainTemplate>
    );
}
