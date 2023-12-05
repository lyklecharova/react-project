export const reducer = (state, action) => {
    switch (action?.type) {
        case 'GET_ALL_COMMENTS':
            return [...action.payload];
        case 'ADD_COMMENT':
            return [...state, action.payload];
        case 'EDIT_COMMENT':
            return state.map(c => c._id === action.payload._id ? { ...c, text: action.payload.text } : c);
        case 'DELETE_COMMENT':
            return state.filter(c => c._id !== action.payload);
        default:
            return state;
    }
}
