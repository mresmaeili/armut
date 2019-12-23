import React, { useState, createContext } from 'react';
import movieList from '../data/movieList.json';
import movieDetails from '../data/movieDetails.json';

export const MovieContext = createContext();
export const DetailContext = createContext();

export const MovieProvider = props => {
  const [movies] = useState(movieList);

  return (
    <MovieContext.Provider value={[movies]}>
      {props.children}
    </MovieContext.Provider>
  );
};

export const DetailProvider = props => {
  const [details, setDetails] = useState(movieDetails);

  return (
    <DetailContext.Provider value={[details, setDetails]}>
      {props.children}
    </DetailContext.Provider>
  );
};
