import React, { useContext } from 'react'
import './App.css'
import { MovieContext, MovieProvider } from './contexts/MovieContext'
import Movies from './Movies'

function Nav() {
    const {movies} = useContext(MovieContext)
    return (
        <div className='nav'>
            <div><h3>Movie Library</h3></div>
            <div><h4>List of movies: {movies.length}</h4></div>
        </div>
    )
}

export default Nav
