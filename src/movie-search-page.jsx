import { useState } from 'react';
import { useApi } from "./useApi";
import MovieGrid from './movie-grid';

export default function MovieSearchPage() {
    const [ data, isLoading, error, submit ] = useApi();

    function handleSubmit(e) {
        e.preventDefault();
        const url = "https://api.themoviedb.org/3/search/movie?query=" + e.target.search.value + "&include_adult=false&language=en-US";
        submit(url, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + process.env.REACT_APP_MOVIE_API_KEY
            }
        });
    }

    let movieGrid;

    if(error) {
        movieGrid = <p>Error: {error.message}</p>
    }

    if(isLoading) {
        movieGrid = <p>Loading...</p>
    }

    if(data && data.results) {
        movieGrid = <MovieGrid data={data} />
    }

    return <div>
        <h1>Movie search page</h1>
        <form className="flex-column" onSubmit={e => handleSubmit(e)}>
            <input type="text" name="search" placeholder="Enter search term" />
            <input type="submit" value="Search" />
        </form>
        {movieGrid}
    </div>
};
