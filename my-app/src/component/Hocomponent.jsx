import React from 'react';

function Hocomponent({ message }) {
  return <h2>{message}</h2>;
}

export default Hocomponent;


// import { useParams } from 'react-router-dom';

// function User() {
//   const { id } = useParams(); // Get value from URL path

//   return <h1>User ID: {id}</h1>;
// }

// Query Params
// import { useSearchParams } from 'react-router-dom';

// function Search() {
//   const [searchParams] = useSearchParams();

//   const term = searchParams.get('term');
//   const sort = searchParams.get('sort');

//   return (
//     <div>
//       <p>Search Term: {term}</p>
//       <p>Sort By: {sort}</p>
//     </div>
//   );
// }
// /search?term=react&sort=latest


// const ProtectedRoute = ({ children }) => {
//   const isAuthenticated = checkAuth();
//   return isAuthenticated ? children : <Navigate to="/login" />;
// };
// <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />;