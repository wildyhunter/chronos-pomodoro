import { Home } from './pages/Home';
import { TaskContextProvider } from './components/context/TaskContext';

import './style/Theme.css';
import './style/Global.css';

export function App() {
    return (
        <>
            <TaskContextProvider>
                <Home />
            </TaskContextProvider>
        </>
    );
}
