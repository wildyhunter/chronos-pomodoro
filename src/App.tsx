import { Home } from './pages/Home';
import { TaskContextProvider } from './components/context/TaskContext/TaskContextProvider';

import './style/Theme.css';
import './style/Global.css';
import { MenssageContainer } from './components/menssageContainer';

export function App() {
    return (
        <>
            <TaskContextProvider>
                <MenssageContainer>
                    <Home />
                </MenssageContainer>
            </TaskContextProvider>
        </>
    );
}
