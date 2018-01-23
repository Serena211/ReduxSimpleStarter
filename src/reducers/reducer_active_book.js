//state argument is not application state, only the state
//this reducer is responsible for

export default function (state = null, action) {
    console.log(JSON.stringify(state) + '---satate');
    console.log(JSON.stringify(action) + '---action');
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}