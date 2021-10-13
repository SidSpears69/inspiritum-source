const UPDATE_SEX = "UPDATE-SEX";
const UPDATE_FIGURE = "UPDATE-FIGURE";
const initialState = {
    sex: "",
    figure: ""
}
const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SEX: {
            return {
                ...state,
                sex: action.value,
            };
        }
        case UPDATE_FIGURE: {
            return {
                ...state,
                figure: action.value,
            };
        }
        default:
            return state;
    }
}

export const updateSexActionCreator = (value) => ({ type: UPDATE_SEX, value: value });
export const updateFigureActionCreator = (value) => ({ type: UPDATE_FIGURE, value: value });
export default formReducer;