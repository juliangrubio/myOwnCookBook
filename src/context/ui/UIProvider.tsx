import { ReactNode, useContext, useReducer } from 'react';
import { UIContext, uiReducer, UIState } from './';

const UI_INITIAL_STATE: UIState = {
    theme: 'light',
    sideMenuOpen: false,
};

// export const UIProvider: FC<childrenProp> = ({ children }) => {
export const UIProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const sideOpen = () => {
        dispatch({
            type: '[UI] - Open Sidemenu'
        })
    };

    const sideClose = () => {
        dispatch({
            type: '[UI] - Close Sidemenu'
        })
    };

    const lightTheme = () => {
        dispatch({
            type: '[UI] - Theme: Light'
        })
    };

    const darkTheme = () => {
        dispatch({
            type: '[UI] - Theme: Dark'
        })
    };

    return (
        <UIContext.Provider value={{
            ...state,

            sideOpen,
            sideClose,
            lightTheme,
            darkTheme
        }}>
            {children}
        </UIContext.Provider>
    );
};

export const useUI = () => useContext(UIContext);