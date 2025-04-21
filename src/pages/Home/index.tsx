import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { MainForm } from '../../components/MainForm';
import { MainTemplate } from '../../components/Templates/MainTemplate';

import styles from './styles.module.css';

export function Home() {
    
    return (
        <MainTemplate>
            <Container>
                <CountDown/>
            </Container>
            <Container>
                <MainForm/>
            </Container>
        </MainTemplate>
    );
}
