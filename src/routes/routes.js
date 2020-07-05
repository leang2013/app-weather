import Home from '../pages/home';
import Detail from '../pages/detail';

const routes = {
  Home: {
    path: '/',
    exact: true,
    component: Home,
  },
  Detail: {
    path: '/detail/:id',
    exact: true,
    component: Detail,
  },
};

export default routes;
