let defaultState = []
let initItemsFromStorage = JSON.parse(localStorage.getItem('task'));
    defaultState = (initItemsFromStorage !== null && initItemsFromStorage.length > 0) ? initItemsFromStorage : defaultState


const items = (state = defaultState, action) => {
    switch (action.type) {
        
        default: 
        return state;
    }

}

export default items