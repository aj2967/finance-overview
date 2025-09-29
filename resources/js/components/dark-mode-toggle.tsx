import { Appearance, useAppearance } from '@/hooks/use-appearance';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function DarkModeToggle() {
    const [theme, setTheme] = useState<Appearance>('light');
    const { appearance, updateAppearance } = useAppearance();

    useEffect(() => {
        setTheme(appearance);
    }, [appearance])

    return (
        <button
            onClick={() => updateAppearance(theme === 'light' ? 'dark' : 'light')}
            aria-label={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            style={{
                padding: '10px',
                cursor: 'pointer',
                backgroundColor: 'transparent',
                border: 'none',
                color: 'inherit',
            }}
        >
            {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
        </button>
    );
}
