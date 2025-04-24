import { Home } from './pages/Home';
import { TaskContextProvider } from './components/context/TaskContext/TaskContextProvider';
import { MenssageContainer } from './components/menssageContainer';
import { BrowserRouter, Routes, Route } from 'react-router';

import './style/Theme.css';
import './style/Global.css';
import { NotFound } from './components/NotFound';
import { AboutPomodoro } from './components/AboutPomodoro';

export function App() {
    return (
        <>
            <TaskContextProvider>
                <MenssageContainer>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route path="/about-pomodoro" element={<AboutPomodoro />}></Route>
                            <Route path="*" element={<NotFound />}></Route>
                        </Routes>
                    </BrowserRouter>
                </MenssageContainer>
            </TaskContextProvider>
        </>
    );
}
