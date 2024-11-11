import MovieCard from './movie-card';

export default function MovieGrid(props) {
    const movieCards = props.data.results.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} title={movie.title} />);
    
    return <div style={{display: "grid", gridTemplateColumns: "repeat(5, 1fr)"}}>
        {movieCards}
    </div>

}