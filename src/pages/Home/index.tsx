import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { MainForm } from '../../components/MainForm';
import { MainTemplate } from '../../components/Templates/MainTemplate';
import { TaskStateModel } from '../../models/TaskStateModel';

import styles from './styles.module.css';

type HomeProps = {
    state: TaskStateModel
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
};


export function Home(props: HomeProps) {
    
    return (
        <MainTemplate>
            <Container>
                <CountDown formattedSecondsRemaining={props.state.formattedSecondsRemaining}/>
            </Container>
            <Container>
                <MainForm />
            </Container>
        </MainTemplate>
    );
}
