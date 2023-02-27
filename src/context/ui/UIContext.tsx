import { createContext } from 'react';
import { lightTheme } from '../../themes/light-theme';
import { darkTheme } from '../../themes/dark-theme';

interface ContextProps {
    theme: string;
    sideMenuOpen: boolean;
    // Methods
    sideOpen: () => void;
    sideClose: () => void;
    lightTheme: () => void;
    darkTheme: () => void;
}

export const UIContext = createContext({} as ContextProps)