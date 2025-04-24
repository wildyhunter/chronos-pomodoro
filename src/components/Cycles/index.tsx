import { useTaskContext } from '../context/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

import styles from './styles.module.css';

export function Cycles() {
    const { state } = useTaskContext();

    const cyclesSteps = Array.from({ length: state.currentCycle });
    const cycleDescriptionMap = {
        WorkTime: 'Fique em foco.',
        ShortBreakTime: 'Descans curto',
        LongBreakTime: 'Descanso longo',
    };

    return (
        <div className={styles.cycles}>
            <span>Cycles:</span>
            <div className={styles.cyclesDots}>
                {cyclesSteps.map((_, index) => {
                    const nextCycle = getNextCycle(index);
                    const cycleType = getNextCycleType(nextCycle);
                    return (
                        <span
                            key={`${nextCycle}_${cycleType}`}
                            className={`${styles.cyclesDot} ${styles[cycleType]}`}
                            aria-label={`Indicador de ciclos de ${cycleDescriptionMap[cycleType]}`}
                            title={`Indicador de ciclos de ${cycleDescriptionMap[cycleType]}`}
                        ></span>
                    );
                })}
            </div>
        </div>
    );
}
