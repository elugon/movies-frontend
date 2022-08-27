import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Card() {

  const [movies, setMovies] = useState(null)

  useEffect(()=>{
    const getData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/movies')
        setMovies(response.data.data);
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  },[])
  return (
    // Use to display each one of the movies
    <div>
      {movies && movies.map(movie => {
       return <div key={movie._id}><p><Link to={`movie/${movie._id}`}>{movie.title}</Link></p><img src={movie.image} alt="movie" className='movie-size'/></div>
      })}
    </div>
  )
}
