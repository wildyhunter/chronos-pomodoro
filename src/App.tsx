import { Home } from './pages/Home';
import { useState } from 'react';

import './style/Theme.css';
import './style/Global.css';
import { TaskStateModel } from './models/TaskStateModel';
import { TaskContextProvider } from './components/context/TaskContext';

const initialState: TaskStateModel = {
    tasks: [],
    secondsRemaining: 0,
    formattedSecondsRemaining: '',
    activeTask: null,
    currentCycle: 0,
    config: {
        WorkTime: 25,
        ShortBreakTime: 5,
        LongBreakTime: 15,
    },
};

export function App() {
    const [state, setState] = useState(initialState);

    return (
        <>
            <TaskContextProvider>
                <Home />
            </TaskContextProvider>
        </>
    );
}
