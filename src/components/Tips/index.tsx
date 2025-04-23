import { useTaskContext } from '../context/TaskContext/useTaskContext';

type TipsProps = {
    cycleType: 'WorkTime' | 'ShortBreakTime' | 'LongBreakTime';
};

export function Tips({cycleType }: TipsProps) {
    const {state} = useTaskContext()

    const tipsWhenActiveTask = {
        WorkTime: (
            <span>
                Foque por <b>{state.config.WorkTime} minutos</b>
            </span>
        ),
        ShortBreakTime: (
            <span>
                Descanse por <b>{state.config.ShortBreakTime} minutos</b>
            </span>
        ),
        LongBreakTime: <span>Descanço longo</span>,
    };

    const tipsWhenNoActiveTask = {
        WorkTime: (
            <span>
                Próximo ciclo é de <b>{state.config.WorkTime} minutos</b>
            </span>
        ),
        ShortBreakTime: (
            <span>
                Próximo ciclo é de <b>{state.config.ShortBreakTime} minutos</b>
            </span>
        ),
        LongBreakTime: <span>Próximo ciclo é de descanso longo</span>,
    };

    return (
        <>
            {!!state.activeTask && tipsWhenActiveTask[state.activeTask.type]}
            {!state.activeTask && tipsWhenNoActiveTask[cycleType]}
        </>
    );
}
