import { DATA_ACTION_TYPES } from "./types";

export const setData = (data) => {
    return {
        type: DATA_ACTION_TYPES.SET_DATA,
        payload: data,
    };
};
