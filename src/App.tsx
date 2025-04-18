import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { Footer } from './components/Footer';

import './style/Theme.css';
import './style/Global.css';
import { MainForm } from './components/MainForm';

export function App() {
    return (
        <>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Menu />
            </Container>

            <Container>
                <CountDown />
            </Container>

            <Container>
                <MainForm />
            </Container>

            <Container>
                <Footer />
            </Container>
        </>
    );
}
