import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RouteConfig from './config';

const RouteView = () => {
  return (
    <Routes>
      {RouteConfig.map(({ path, element, key }) => (
        <Route key={key} path={path} element={element} />
      ))}
    </Routes>
  )
}

export default RouteView;