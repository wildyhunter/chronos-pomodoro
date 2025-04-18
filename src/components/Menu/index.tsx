import {
    HistoryIcon,
    HouseIcon,
    NotepadText,
    SettingsIcon,
    SunIcon,
    TimerIcon,
} from 'lucide-react';
import { useState } from 'react';

import styles from './styles.module.css';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>('dark');

    function handleToggleTheme(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        e.preventDefault();
        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', nextTheme);
            return nextTheme;
        });
        
    }

    return (
        <nav className={styles.menu}>
            <a
                href=""
                className={styles.menuLink}
                aria-label="Ir para Pagina Home"
                title="Ir para Pagina Home"
            >
                <HouseIcon />
            </a>
            <a
                href=""
                className={styles.menuLink}
                aria-label="Verr historico"
                title="Verr historico"
            >
                <HistoryIcon />
            </a>
            <a
                href=""
                className={styles.menuLink}
                aria-label="Configurações"
                title="Configurações"
            >
                <SettingsIcon />
            </a>
            <a
                href="#"
                className={styles.menuLink}
                aria-label="Modo noturno"
                title="Modo noturno"
                onClick={(e) => handleToggleTheme(e)}
            >
                <SunIcon />
            </a>
        </nav>
    );
}
