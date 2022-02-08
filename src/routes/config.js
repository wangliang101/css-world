import { lazy } from 'react';

const Home = lazy(() => import('../page/home'));
const Ahout = lazy(() => import('../page/about'));


const RouteConfig = [
  {
    title: "home",
    path: "/home",
    key: 'home',
    element: <Home />,
  },
  {
    title: "about",
    path: "/about",
    key: 'about',
    element: <Ahout />,
  }
]

export default RouteConfig;
