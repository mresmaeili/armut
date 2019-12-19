import React from 'react';
import Movie from './Movie';

export default function MovieList({ movies }) {
  return movies.map(movie => {
    return <Movie key={movie.id} movie={movie} />;
  });
}
