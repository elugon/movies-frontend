import React from 'react';
import { useParams } from 'react-router-dom';

export default function Movie() {
  const params = useParams();
  console.log(params)
  return (
    <div>
      <h2>Movie details</h2>
      {/* Should be the detail of one movie  */}
      {/* Should have a delete button to delete the movie and then redirect to the Home */}
    </div>
  )
}
