import { TaskContextProvider } from './components/context/TaskContext/TaskContextProvider';
import { MenssageContainer } from './components/menssageContainer';
import { MainRouter } from './routers/mainRouter/MainRouter';

import './style/Theme.css';
import './style/Global.css';

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
