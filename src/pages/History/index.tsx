import { TrashIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../components/Templates/MainTemplate';

import styles from './styles.module.css';

export function History() {
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
                          {Array.from({ length: 10 }).map((_, index) => (
                            <tr key={index}>
                                <td>Estudar</td>
                                <td>25 min</td>
                                <td>20/04/2025 08:00</td>
                                <td>completa</td>
                                <td>Foco</td>
                            </tr>
                          ))}
                        </tbody>
                    </table>
                </div>
            </Container>
        </MainTemplate>
    );
}
