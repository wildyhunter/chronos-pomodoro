import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
import { AboutPomodoro } from '../../pages/AboutPomodoro';
import { NotFound } from '../../pages/NotFound';
import { useEffect } from 'react';
import { Home } from '../../pages/Home';
import { History } from '../../pages/History';
import { Settings } from '../../pages/Settings';

function ScrollToTop() {
    const pathname = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    return null;
}

export function MainRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/history/" element={<History />}></Route>
                    <Route path="/settings/" element={<Settings />}></Route>
                    <Route
                        path="/about-pomodoro/"
                        element={<AboutPomodoro />}
                    ></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
                <ScrollToTop />
            </BrowserRouter>
        </>
    );
}
