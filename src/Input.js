import React, { useState, useContext } from 'react'
import { MovieContext } from './contexts/MovieContext'

function Input() {
    const [movieInput, setMovieInput] =  useState('')
    const [rating, setRating] =  useState('')
    const [review, setReview] =  useState('')

    const {movies, setMovies, clearMovies} = useContext(MovieContext)

    const addMovie = e => {
        e.preventDefault()

        if (movieInput === '' || rating ==='' || review === '' ){
            alert('Enter all fields....')
            return
        }

        setMovies(prevMovies => [...prevMovies, {name: movieInput, rating, review, id: Math.floor(Math.random() * 1000000)}])
        setMovieInput('')
        setRating('')
        setReview('')
    }

    return (<>
            <form onSubmit={addMovie} style={{marginTop: '1rem'}}>
                <p id='error'></p>
                <input onChange={(e) => setMovieInput(e.target.value)} className='movie_input' type='text' value={movieInput} placeholder='Enter a movie' /><br/>
                <input onChange={(e) => setRating(e.target.value)} className='movie_input' type='text' value={rating} placeholder='Enter rating' /><br/>
                <input onChange={(e) => setReview(e.target.value)} className='movie_input' type='text' value={review} placeholder='Enter review' /><br/>
                <button type='submit' className='movie_btn submit'>Submit</button><br/>
            </form>
            <button onClick={() => clearMovies(movies)} type='submit' className='movie_btn clear'>Clear Movies</button>
        </>
    )
}

export default Input
