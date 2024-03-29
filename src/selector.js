/**
 * Created by angelks on 2017/10/22.
 */

const getVisibleTodos = (state, filter) => {
    switch(filter) {
        case 'all':
            return state;
        case 'active':
            return state.filter(t => !t.completed);
        case 'completed':
            return state.filter(t => t.completed);
        default:
            return state;
    }
};

export default getVisibleTodos;
