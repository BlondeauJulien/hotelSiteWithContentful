import { Fragment } from 'react';
import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

function App() {
  return (
    <Fragment>
      <Home></Home>
      <Rooms></Rooms>
      <SingleRoom></SingleRoom>
      <Error></Error>
    </Fragment>
  );
}

export default App;
