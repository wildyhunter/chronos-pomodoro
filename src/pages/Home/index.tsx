import { useEffect } from 'react';
import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { MainForm } from '../../components/MainForm';
import { MainTemplate } from '../../components/Templates/MainTemplate';

export function Home() {
        useEffect(() => {
            document.title = 'Chronos Pomodoro - Home';
        }, [])
    
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
