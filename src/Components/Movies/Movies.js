import React, { useEffect, useState } from 'react';
import SingleMovie from '../SingleMovie/SingleMovie';

const Movies = () => {
  const [movies,setMovies]=useState([])
  const apiKey='870967436c1517d581daf3b245495790'
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`)
    .then(res => res.json())
    .then(data => setMovies(data.results))
  },[])
  // first div e class dewar pore middle align hoise , erpor er div e row dewar pore 3 ta column e divide hoise
  return (
    <div className="container mt-5">
       <h1>Total Movies: {movies.length}</h1>
      <div className='row'>
      
     
      {
        movies.map(movie => <SingleMovie movie={movie}></SingleMovie>)
      }
      </div>
     
    </div>
  );
};

export default Movies;