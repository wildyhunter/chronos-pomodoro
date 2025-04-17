import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';

import './style/Theme.css';
import './style/Global.css';
import { DefaultInput } from './components/DefaultInput';

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
                        <DefaultInput id="meuInput" type="text" />
                    </div>

                    <div className="formBox">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="formBox">
                        <p>Ciclos</p>
                        <p>0 0 0 0 0</p>
                    </div>

                    <div className="formBox">
                        <button>Enviar</button>
                    </div>
                </form>
            </Container>
        </>
    );
}
