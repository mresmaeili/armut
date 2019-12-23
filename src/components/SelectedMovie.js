import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { DetailContext } from '../store/MovieContext';
import timeConverter from './TimeConverter';
import '../styles/main.css';

const SelectedMovie = () => {
  const [details, setDetails, toggleWatch] = useContext(DetailContext);
  let { id } = useParams();
  if (details) {
    const [filteredDetails] = details.filter(detail => {
      return detail.id === id;
    });

    const {
      posterurl,
      year,
      duration,
      originalTitle,
      imdbRating,
      genres,
      storyline,
      directors,
      writers,
      actors,
      watchList
    } = filteredDetails;

    function handleToggleWatch() {
      toggleWatch(filteredDetails.id);
    }

    function WatchlistButton() {
      if (watchList === true) {
        return (
          <button className='button is-success' onClick={handleToggleWatch}>
            <i className='fas fa-minus'></i>
            REMOVE FROM WATCHLIST
          </button>
        );
      } else
        return (
          <button className='button is-primary' onClick={handleToggleWatch}>
            <i className='fas fa-plus'></i> ADD TO WATCHLIST
          </button>
        );
    }
    function WatchlistSmall() {
      if (watchList === true) {
        return (
          <button
            className='button is-success is-circle'
            onClick={handleToggleWatch}
          >
            <i className='fas fa-minus'></i>
          </button>
        );
      } else
        return (
          <button
            className='button is-primary is-circle'
            onClick={handleToggleWatch}
          >
            <i className='fas fa-plus '></i>
          </button>
        );
    }

    return (
      <div>
        <div className='notification is-primary'>
          <Link to='/' className='closeDetail'>
            <i className='far fa-times-circle fa-2x'></i>
          </Link>
          <img
            src={posterurl}
            alt={originalTitle}
            className='card-image is-small'
          />
          <div className='toggleBtn'>
            <WatchlistSmall />
          </div>
        </div>
        <div className='columns is-mobile  is-vcentered'>
          <span className='column'>
            <span className=' title is-5'>{originalTitle}</span>
          </span>
          <span className='column is-one-fifth'>
            <span className='button is-primary is-outlined is-small'>
              {imdbRating}
            </span>
          </span>
          <span className='column'>
            {' '}
            <progress
              className='progress is-primary is-small'
              value={imdbRating}
              max='10'
            ></progress>
          </span>
        </div>
        <div className='subtitle is-6'>
          {year} . {genres ? genres.join(', ') : ''} . {timeConverter(duration)}
        </div>
        <div className='subtitle is-6-black'>{storyline}</div>
        <hr />

        <div className='columns is-mobile'>
          <div className='column is-one-fifth'>
            <strong>Director: </strong>
          </div>
          <div className='column'>
            <span className='subtitle is-6-primary'>{directors}</span>
          </div>
        </div>
        <div className='columns is-mobile'>
          <div className='column is-one-fifth'>
            <strong>Writers: </strong>
          </div>
          <div className='column'>
            <span className='subtitle is-6-primary'>{writers}</span>
          </div>
        </div>
        <div className='columns is-mobile '>
          <div className='column is-one-fifth'>
            <strong>Stars: </strong>
          </div>
          <div className='column'>
            <span className='subtitle is-6-primary'>
              {actors ? actors.join(', ') : ''}
            </span>
          </div>
        </div>
        <br />
        <center>
          <WatchlistButton />
        </center>
      </div>
    );
  } else {
    return '';
  }
};

export default SelectedMovie;
