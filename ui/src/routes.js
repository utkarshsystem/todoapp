import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteWithSubRoutes from './RouteWithSubRoutes';

const Home = lazy(() => import('./components/pages/home/Home'));
const HelloWorld = lazy(() => import('./components/pages/home/helloworld'));

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/hello',
    component: HelloWorld,
  },
 
];

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Suspense fallback={<div className="lazy-loading">Loading... coming from suspense</div>}>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Suspense>
      </div>
    </Router>
  );
};

export default AppRouter;
