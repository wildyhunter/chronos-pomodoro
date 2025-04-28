import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../components/Templates/MainTemplate';

export function Settings() {
    return (
        <MainTemplate>
            <Heading>Configurações</Heading>
            <Container>
                <p style={{ textAlign: 'center' }}>
                    Modifique as configurações para tempo de foco, descanso
                    curto e descanso longo.
                </p>
            </Container>
        </MainTemplate>
    );
}
