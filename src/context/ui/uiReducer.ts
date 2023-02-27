
export interface UIState {
    theme: string;
    sideMenuOpen: boolean;
}

type UIActionType =
    | { type: '[UI] - Open Sidemenu' }
    // | { type: '[UI] - Close Sidemenu', payload: {} }
    | { type: '[UI] - Close Sidemenu' }
    | { type: '[UI] - Theme: Light' }
    | { type: '[UI] - Theme: Dark' }

export const uiReducer = (state: UIState, action: UIActionType): UIState => {

    switch (action.type) {
        case '[UI] - Open Sidemenu':
            return {
                ...state,
                sideMenuOpen: true
            }

        case '[UI] - Close Sidemenu':
            return {
                ...state,
                sideMenuOpen: false
            }

        case '[UI] - Theme: Light':
            return {
                ...state,
                theme: 'light'
            }

        case '[UI] - Theme: Dark':
            return {
                ...state,
                theme: 'dark'
            }

        default:
            return state;
    }

}