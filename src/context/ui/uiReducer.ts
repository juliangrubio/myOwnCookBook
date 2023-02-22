import { UIState } from "./"


type UIActionType =
    | { type: '[UI] - Open Sidemenu' }
    | { type: '[UI] - Close Sidemenu', payload: {} }

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

        default:
            return state;
    }

}