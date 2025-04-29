import { TrashIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../components/Templates/MainTemplate';
import { useTaskContext } from '../../context/TaskContext/useTaskContext';
import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
import { SortTasksOptions, sortTasks } from '../../utils/sortTask';
import { useEffect, useState } from 'react';
import { TaskActionTypes } from '../../context/TaskContext/taskAction';

import styles from './styles.module.css';

export function History() {
    const { state, dispatch } = useTaskContext();
    const [sortedTasksOptions, setSortedTasksOptions] =
        useState<SortTasksOptions>(() => {
            return {
                tasks: sortTasks({ tasks: state.tasks }),
                field: 'startDate',
                direction: 'desc',
            };
        });

    useEffect(() => {
        document.title = 'Histórico | Chronos Pomodoro';
    }, []);

    useEffect(() => {
        setSortedTasksOptions((prevState) => ({
            ...prevState,
            tasks: sortTasks({
                tasks: prevState.tasks,
                field: prevState.field,
                direction: prevState.direction,
            }),
        }));
    }, [state.tasks]);

    function handleSortTasks({ field }: Pick<SortTasksOptions, 'field'>) {
        const newdirection =
            sortedTasksOptions.direction === 'asc' ? 'desc' : 'asc';
        setSortedTasksOptions({
            tasks: sortTasks({
                tasks: sortedTasksOptions.tasks,
                field,
                direction: newdirection,
            }),
            field,
            direction: newdirection,
        });
    }

    function handelResetHistory() {
        if (!confirm('Tem certeza que deseja limpar o histórico?')) return;
        dispatch({ type: TaskActionTypes.RESET_STATE });
        window.location.reload();
    }

    const taskType = {
        WorkTime: 'Em foco.',
        ShortBreakTime: 'Desncanso curo.',
        LongBreakTime: 'Descanso longo.',
    };

    console.log(state);
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
                            onClick={handelResetHistory}
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
                                    <th
                                        onClick={() =>
                                            handleSortTasks({ field: 'name' })
                                        }
                                    >
                                        Tarefa
                                    </th>
                                    <th
                                        onClick={() =>
                                            handleSortTasks({
                                                field: 'duration',
                                            })
                                        }
                                    >
                                        Duração
                                    </th>
                                    <th
                                        onClick={() =>
                                            handleSortTasks({
                                                field: 'startDate',
                                            })
                                        }
                                    >
                                        Data
                                    </th>
                                    <th>Status</th>
                                    <th>Tipo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedTasksOptions.tasks.map((task) => (
                                    <tr key={task.id}>
                                        <td>{task.name}</td>
                                        <td>{task.duration} minutos</td>
                                        <td>{formatDate(task.startDate)}</td>
                                        <td>
                                            {getTaskStatus(
                                                task,
                                                state.activeTask
                                            )}
                                        </td>
                                        <td>{taskType[task.type]}</td>
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
