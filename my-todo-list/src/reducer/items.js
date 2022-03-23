import {v4 as uuidv4} from 'uuid'

let defaultState = [
    {
        id      : uuidv4(),
        name    : "Coding papmall",
        level   : 0 // 0 Small, 1 Medium, 2 High
    },
    {
        id      : uuidv4(),
        name    : "Task travelner",
        level   : 1 // 0 Small, 1 Medium, 2 High
    },
    {
        id      : uuidv4(),
        name    : "Work from home",
        level   : 2 // 0 Small, 1 Medium, 2 High
    }
    ,
    {
        id      : uuidv4(),
        name    : "Test",
        level   : 0 // 0 Small, 1 Medium, 2 High
    }
]


const items = (state = defaultState, action) => {
    switch (action.type) {
        
        default: 
        return state;
    }

}

export default items