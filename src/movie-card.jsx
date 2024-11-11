import React from 'react';
export default function MovieCard(props) {
    return <div>
        <h3>{props.title}</h3>
        <img src={"https://image.tmdb.org/t/p/w200" + props.posterPath} />
    </div>
}