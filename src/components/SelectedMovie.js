import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import movieDetails from '../data/movieDetails.json';
import Details from './Details';
import '../styles/main.css';

export default function SelectedMovie() {
  const [details, setDetails] = useState([]);
  const [watchlist, setWatchlist] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const [SelectedMovieDetails] = movieDetails.filter(detail => {
      return detail.id === id;
    });
    if (SelectedMovieDetails) setDetails(SelectedMovieDetails);
  }, [id]);

  function toggleWatch(watchlist) {
    watchlist = !watchlist;
    setWatchlist(watchlist);
  }

  return (
    <div className='container'>
      <div className='block'>
        <Details
          details={details}
          watchlist={watchlist}
          toggleWatch={toggleWatch}
        />
      </div>
    </div>
  );
}
