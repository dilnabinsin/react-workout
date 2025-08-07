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
// Reading Query Params
// jsx
// Copy
// Edit
// import { useLocation } from 'react-router-dom';

// const { search } = useLocation();
// const params = new URLSearchParams(search);
// const name = params.get("name");

{/* <Route path="/user/:id" element={<User />} />

const { id } = useParams(); */}


// Redirecting User
// jsx
// Copy
// Edit
// import { useNavigate } from 'react-router-dom';

// const navigate = useNavigate();
// navigate("/login"); // redirects

// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();
// navigate("/profile"); // replaces history.push
// History object in v5: useHistory()

// Route Protection
// jsx
// Copy
// Edit
// const PrivateRoute = ({ children }) => {
//   const isAuth = useAuth();
//   return isAuth ? children : <Navigate to="/login" />;
// };


// App.js
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./Layout";
// import Home from "./Home";
// import About from "./About";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />        {/* Renders at "/" */}
//           <Route path="about" element={<About />} /> {/* Renders at "/about" */}
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }
// import { Outlet, Link } from "react-router-dom";

// function Layout() {
//   return (
//     <div>
//       <nav>
//         <Link to="/">Home</Link> | <Link to="about">About</Link>
//       </nav>
//       <hr />
//       <Outlet /> {/* This is where child routes will render */}
//     </div>
//   );
// }