// https://www.youtube.com/watch?v=KH-pw1cv34E
// https://www.youtube.com/watch?v=OapRLFqveS4&t=30s

import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import MovieList from './components/movieList/MovieList'; 
import MovieDetails from './pages/movieDetails/MovieDetails';

function App() {
  return (
    <div className="App">
   
   
    <Router>
      <Header></Header>
      <Routes>
      <Route index element={<Home/>}></Route>
      <Route path="movie/:id" element={<MovieDetails/>}></Route>
      <Route path="movies/:type" element={<MovieList/>}></Route>
      <Route path="/*" element={<h1>Error</h1>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
