export const reducer = (state, action) => {
    switch (action?.type) {
        case 'GET_ALL_COMMENTS':
            // връща нов масив от коментари, като копира всички коментари от действието 
            return [...action.payload];
        case 'ADD_COMMENT':
            // връща нов масив от коментари, като запазва текущите коментари (state) и добавя новия коментар от действието (action.payload). 
            //Този ред се използва, когато е необходимо добавяне на нов коментар към текущия масив от коментари.
            return [...state, action.payload];
        case 'EDIT_COMMENT':
            // Когато се получи действие за редактиране на коментар, 
            //този ред в reducer използва функцията map, за да създаде нов масив от коментари, 
            //където текстът на коментар със съответното _id се заменя с новия текст от действието за редактиране.
            return state.map(c => c._id === action.payload._id ? { ...c, text: action.payload.text } : c);
        case 'DELETE_COMMENT':
            // използва се filter, за да създаде нов масив от коментари, 
            //включващ само тези, чийто _id не съвпада с _id в действието за изтриване (action.payload), 
            // тоест  изтрива коментара със съответното _id.
            return state.filter(c => c._id !== action.payload);
        default:
            return state;
    }
}
