import { TaskContextProvider } from './context/TaskContext/TaskContextProvider';
import { MenssageContainer } from './components/menssageContainer';
import { MainRouter } from './routers/mainRouter/MainRouter';

import './style/theme.css';
import './style/global.css';

export function App() {
    return (
        <>
            <TaskContextProvider>
                <MenssageContainer>
                    <MainRouter />
                </MenssageContainer>
            </TaskContextProvider>
        </>
    );
}
