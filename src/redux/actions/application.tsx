import { Payload } from "../../types/action";
export const loginUser = (payload: Payload) => ({
    type: "LOGIN_USER",
    payload
});


export const showLoader = () => ({
    type: "SHOW_LOADER",
});


export const hideLoader = () => ({
    type: "HIDE_LOADER",

});

