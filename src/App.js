import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './components/MovieList';
import SelectedMovie from './components/SelectedMovie';
import { MovieProvider } from './store/MovieContext';
import { DetailProvider } from './store/MovieContext';
import { WatchListProvider } from './store/MovieContext';

import './styles/main.css';
function App() {
  return (
    <Router>
      <WatchListProvider>
        <Route exact path='/'>
          <section className='section'>
            <MovieProvider>
              <MovieList />
            </MovieProvider>
          </section>
        </Route>
        <Switch>
          <DetailProvider>
            <Route exact path='/movie/:id'>
              <SelectedMovie />
            </Route>
          </DetailProvider>
        </Switch>
      </WatchListProvider>
    </Router>
  );
}

export default App;
