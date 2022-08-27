import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function MovieDetails() {

  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/movies/${id}`)
        setMovie(response.data.data)
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/movies/${id}`);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  }
 
  return (
    <div>
      <p>Movie</p>
      {movie && (
        <div>
          <h6>Movie: {movie.title}</h6>
          <p>Year: {movie.year}</p>
          <p>Sypnosis: {movie.synopsis}</p>
          <p>Duration: {movie.duration}</p>
          <p><img src={movie.image} alt="movie" className='movie-size'/></p>
          <button onClick={handleDelete}>Delete movie</button>
          <button onClick={() => navigate(`/edit/${id}`)}>Edit movie</button>
        </div>)}
      {!movie && <p>movie not found</p>}
    </div>
  )
}
