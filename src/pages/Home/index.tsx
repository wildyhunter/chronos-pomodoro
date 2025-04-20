import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { MainForm } from '../../components/MainForm';
import { MainTemplate } from '../../components/Templates/MainTemplate';
import { TaskStateModel } from '../../models/TaskStateModel';

import styles from './styles.module.css';

type Props = {
    state: TaskStateModel
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
};


export function Home(props: Props) {
    
    return (
        <MainTemplate>
            <Container>
                <CountDown />
            </Container>
            <Container>
                <MainForm />
            </Container>
        </MainTemplate>
    );
}
