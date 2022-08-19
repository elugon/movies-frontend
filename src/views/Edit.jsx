import React from 'react';
import { useParams } from 'react-router-dom';

export default function Edit() {
  const params = useParams();
  console.log(params)
  return (
    <div>
      <h2>Edit movie</h2>
      {/* Should display a form with the data previously incorporated and when saved, send the
      changes to the database. Then it should redirect to the Home ('/') */}
    </div>
  )
}
