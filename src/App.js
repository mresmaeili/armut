import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './components/MovieList';
import SelectedMovie from './components/SelectedMovie';
import movieList from './data/movieList.json';
import './styles/main.css';
function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movieList) setMovies(movieList);
  }, []);
  return (
    <Router>
      <Route exact path='/'>
        <section className='section'>
          <MovieList movies={movies} />
        </section>
      </Route>
      <Switch>
        <Route exact path='/movie/:id'>
          <SelectedMovie />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
