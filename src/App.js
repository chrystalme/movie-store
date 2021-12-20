import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Movie from './component/MovieDetails';
import PageNotFound from './component/PageNotFound';


function App() {
  return (
    <div className=""> 
  <BrowserRouter>
    <Header />
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/movie/:imdbId" element={<Movie />} />
    <Route element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
