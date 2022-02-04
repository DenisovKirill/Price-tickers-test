import { DATA_ACTION_TYPES } from "../actions/types";

const initialState = {
    tickers: [],
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case DATA_ACTION_TYPES.SET_DATA:
            return {
                ...state,
                tickers: action.payload,
            };

        default:
            return state;
    }
};

export default dataReducer;
