import { Action } from "../../types/action"

const initialState = {
    loading: false,
    email: '',
    // data: {},
};

const reducer = (state = initialState, action: Action) => {

    switch (action.type) {
        case "USERS_DATA":
            return {
                ...state,
                // data: { ...action.data },
                loading: true,
            };
        case "SHOW_LOADER":
            return {
                ...state,
                loading: true,
            };
        case "HIDE_LOADER":
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export default reducer;
