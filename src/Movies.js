import React, { useContext } from 'react'
import { MovieContext } from './contexts/MovieContext'
import './App.css'

function Movies() {
    const {movies, removeMovies} = useContext(MovieContext)
    return (
        <div>
            {movies.length ? (
                <div className='movie_list'>
                    {movies.map(movie => (<>
                            <div key={movie.id} >
                                <p><b>Movie name:</b> {movie.name}</p>
                                <p><b>Rating:</b> {movie.rating}</p>
                                <p><b>Review:</b> {movie.review}</p>
                                <button onClick={() =>removeMovies(movie.id)} className='movie_btn delete'>Remove Movie</button>
                                <hr/>
                            </div>
                         </>
                    ))}
                </div>
            ) : (
                <h4>No Movies </h4>
            )}
        </div>
    )
}

export default Movies
