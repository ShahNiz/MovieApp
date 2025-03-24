import React from 'react'
import {Routes,Route} from 'react-router-dom'
import MovieDetails  from '../../src/Pages/MovieDetails'
import  MovieList  from '../../src/Pages/MovieList'
import  Search from '../../src/Pages/Search'
import PageNotFound  from '../../src/Pages/PageNotFound'


const AllRoutes = () => {

  return (
   <>

   <div className='dark:bg-slate-700 transition-all duration-200'>
   <Routes>
    <Route path='' element={<MovieList apiPath="movie/now_playing"/>}/>
    <Route path='movie/:id' element={<MovieDetails/>}/>
    <Route path='movies/popular' element={<MovieList apiPath="movie/popular"/>}/>
    <Route path='movies/upcoming' element={<MovieList apiPath="movie/upcoming"/>}/>
    <Route path='movies/top' element={<MovieList apiPath="movie/top_rated"/>}/>
    <Route path='*' element={<PageNotFound/>}/>
    <Route path='search' element={<Search apiPath="search/movie"/>}/>
   </Routes>
   </div>
   </>
  )
}

export default AllRoutes
