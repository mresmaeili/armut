import React from 'react';
import { Link } from 'react-router-dom';
import timeConverter from './TimeConverter';

export default function Movie({ movie }) {
  const {
    posterurl,
    originalTitle,
    year,
    genres,
    duration,
    imdbRating,
    id
  } = movie;
  const time = duration ? timeConverter(duration) : '';
  return (
    <div className='container'>
      <div className='card'>
        <center>
          <img src={posterurl} className='card-image' alt={originalTitle} />
        </center>
        <div className='card-content'>
          <div className='title is-4'>{originalTitle}</div>
          <div className='subtitle is-6'>
            {year} . {genres ? genres.join(', ') : ''} . {time}
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
    </div>
  );
}
