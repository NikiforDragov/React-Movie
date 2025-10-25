import MovieCard from '../components/MovieCard';
import { useState } from 'react';
import '../css/Home.css';

function Home() {
    const [searchQuery, setSearchQuery] = useState('');

    const movies = [
        { id: 1, title: 'Harry Potter', release_date: '2001' },
        { id: 2, title: 'Fast And Furious', release_date: '2005' },
        { id: 3, title: 'Titanic', release_date: '1999' },
        { id: 4, title: 'Smile', release_date: '2022' },
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery('');
    };

    return (
        <div className='home'>
            <form onSubmit={handleSearch} className='search-form'>
                <input
                    type='text'
                    placeholder='Search for movies'
                    className='search-input'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type='submit' className='search-button'>
                    Search
                </button>
            </form>

            <div className='movies-grid'>
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default Home;
