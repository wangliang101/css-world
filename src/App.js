import { Suspense }  from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteView from './routes';
import './App.css';

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <div className="App" >
        <BrowserRouter>
          <RouteView />
        </BrowserRouter>
      </div>
    </Suspense>
  );
}

export default App;
