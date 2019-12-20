import React, { useState, useEffect, createContext } from 'react';
import movieList from '../data/movieList.json';
import movieDetails from '../data/movieDetails.json';

export const MovieContext = createContext();
export const DetailContext = createContext();
export const WatchListContext = createContext();

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

  return (
    <DetailContext.Provider value={[details, setDetails]}>
      {props.children}
    </DetailContext.Provider>
  );
};

export const WatchListProvider = props => {
  const [watchList, setWatchList] = useState(false);
  const toggleWatch = watchList => {
    const newWatchlist = !watchList;
    setWatchList(newWatchlist);
  };
  return (
    <WatchListContext.Provider value={[watchList, setWatchList, toggleWatch]}>
      {props.children}
    </WatchListContext.Provider>
  );
};
