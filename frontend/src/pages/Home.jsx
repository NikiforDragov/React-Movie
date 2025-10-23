import MovieCard from '../components/MovieCard';
function Home() {
    const movies = [
        { id: 1, title: 'Harry Potter', release_date: '2001' },
        { id: 2, title: 'Fast And Furious', release_date: '2005' },
        { id: 3, title: 'Titanic', release_date: '1999' },
        { id: 4, title: 'Smile', release_date: '2022' },
    ];

    return (
        <div className='home'>
            <div className='movies-grid'>
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default Home;
