import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from './Component/Header/MainNav';
import Loader from './Component/Common/Loader';
const HomePage = React.lazy(() => import("../src/Component/HomePage"));

function App() {
  return (
    <HashRouter>
      <div className="App">
        <React.Suspense fallback={
          <Loader />
        }>
          <MainNav />
          <HomePage />
        </React.Suspense>
      </div>
    </HashRouter>
  );
}

export default App;
