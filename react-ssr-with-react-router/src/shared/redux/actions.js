import { fetchPopularRepos } from '../api';

export function fetchRepos (lang) {
    return dispatch => {
        return fetchPopularRepos(lang).then(data => {
            dispatch({
                type: 'FETCH_REPOS',
                data
            });
        })
    }
}