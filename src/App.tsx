import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';

import './style/Theme.css';
import './style/Global.css';

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
                <form className="form" action="">
                    <div className="formBox">
                        <DefaultInput id="meuInput" type="text" labelText='Task'/>
                    </div>

                    <div className="formBox">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="formBox">

                    </div>

                    <div className="formBox">
                        <button>Enviar</button>
                    </div>
                </form>
            </Container>
        </>
    );
}
