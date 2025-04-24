import {
    HistoryIcon,
    HouseIcon,
    MoonIcon,
    SettingsIcon,
    SunIcon,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { RouterLink } from '../RouterLink';

import styles from './styles.module.css';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = localStorage.getItem('theme') as AvailableThemes;
        return storageTheme ?? 'dark';
    });

    const nextThemeIcon = {
        light: <MoonIcon />,
        dark: <SunIcon />,
    };

    function handleToggleTheme(
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) {
        e.preventDefault();
        setTheme((prevTheme) => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', nextTheme);
            return nextTheme;
        });
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <nav className={styles.menu}>
            <RouterLink
                href="/"
                className={styles.menuLink}
                aria-label="Ir para Pagina Home"
                title="Ir para Pagina Home"
            >
                <HouseIcon />
            </RouterLink>
            <RouterLink
                href="/history/"
                className={styles.menuLink}
                aria-label="Verr historico"
                title="Verr historico"
            >
                <HistoryIcon />
            </RouterLink>
            <RouterLink
                href="/settings/"
                className={styles.menuLink}
                aria-label="Configurações"
                title="Configurações"
            >
                <SettingsIcon />
            </RouterLink>
            <RouterLink
                href="#"
                className={styles.menuLink}
                aria-label="Modo noturno"
                title="Modo noturno"
                onClick={(e) => handleToggleTheme(e)}
            >
                {nextThemeIcon[theme]}
            </RouterLink>
        </nav>
    );
}
