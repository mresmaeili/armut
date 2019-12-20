import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import timeConverter from './TimeConverter';
import { MovieContext } from '../store/MovieContext';

export default function Movie() {
  const [movies] = useContext(MovieContext);
  return (
    <div>
      {movies.map(
        ({
          id,
          posterurl,
          originalTitle,
          year,
          genres,
          imdbRating,
          duration
        }) => (
          <div className='card' key={id}>
            <center>
              <img src={posterurl} className='card-image' alt={originalTitle} />
            </center>
            <div className='card-content'>
              <div className='title is-4'>{originalTitle}</div>
              <div className='subtitle is-6'>
                {year} . {genres ? genres.join(', ') : ''} .{' '}
                {duration ? timeConverter(duration) : ''}
              </div>
              <div>
                <span className='title is-4'>{imdbRating}</span>/10
              </div>
              <div className='subtitle'>
                <progress
                  className='progress is-primary is-medium'
                  value={imdbRating}
                  max='10'
                >
                  {imdbRating}
                </progress>
              </div>
              <Link to={`/movie/${id}`} className='button is-primary'>
                Movie Details
              </Link>
            </div>
          </div>
        )
      )}
    </div>
  );
}
