import Grid from './Grid';
import Home from './Home';
import { fetchRepos } from './redux/actions';

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/popular/:id',
        component: Grid,
        action: (path = "") => fetchRepos(path.split('/').pop())
    }
];

export default routes;
