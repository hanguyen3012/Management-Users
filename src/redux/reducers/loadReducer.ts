import { Action } from "../../types/action"

const initialState = {
    loading: false,
};

const reducer = (state = initialState, action: Action) => {

    switch (action.type) {
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
