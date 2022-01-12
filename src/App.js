import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import MovieDetails from './component/MovieDetails';
import PageNotFound from './component/PageNotFound';
import Footer from './component/Footer';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="movie">
            <Route path=":imdbId" element={<MovieDetails />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
