import {Container} from './components/Container';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';

import './style/Theme.css';
import './style/Global.css';


export function App() {
    return (
        <>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Heading>MENU</Heading>
            </Container>
        </>
    );
}
