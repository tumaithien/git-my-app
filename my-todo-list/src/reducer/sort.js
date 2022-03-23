const initState = {
    orderBy: 'name',
    orderDir: 'asc'
}
const sort = (state = initState, action) => {
    switch (action.type) {
        case 'ACT_SORT':
            return{
                orderBy: action.orderBy, 
                orderDir: action.orderDir
            }
        default: 
        return state;
    }

}
export default sort