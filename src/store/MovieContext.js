import React, { useState, useEffect, createContext } from 'react';
import movieList from '../data/movieList.json';
import movieDetails from '../data/movieDetails.json';

export const MovieContext = createContext();
export const DetailContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movieList) setMovies(movieList);
  }, []);

  return (
    <MovieContext.Provider value={[movies]}>
      {props.children}
    </MovieContext.Provider>
  );
};

export const DetailProvider = props => {
  const [details, setDetails] = useState('');

  useEffect(() => {
    if (movieDetails) setDetails(movieDetails);
  }, []);
  function toggleWatch(id) {
    const newDetails = [...movieDetails];
    const detail = newDetails.find(detail => detail.id === id);
    detail.watchList = !detail.watchList;
    setDetails(newDetails);
  }

  return (
    <DetailContext.Provider value={[details, setDetails, toggleWatch]}>
      {props.children}
    </DetailContext.Provider>
  );
};
