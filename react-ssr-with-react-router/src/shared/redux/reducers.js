export default function repos(state=[], action) {
    if (action.type === 'FETCH_REPOS') {
        return action.data
    } else {
        return state;
    }
}