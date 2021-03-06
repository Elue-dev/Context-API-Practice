import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([]);

    const removeMovies = id => {
        setMovies(movies.filter(movie => movie.id !== id))
    }

    const clearMovies = () => {
        if(movies.length === 0){
            alert('No movies to clear')
        }else{
            setMovies([])
        }
    }

    return(
        <MovieContext.Provider value={{
            movies,
            setMovies,
            removeMovies,
            clearMovies}}>
            {props.children}
        </MovieContext.Provider>
    )
}