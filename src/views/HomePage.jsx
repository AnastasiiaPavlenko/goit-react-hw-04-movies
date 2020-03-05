import React, { Component } from 'react';
import moviesAPI from '../services/api';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    state = {
        movies: [],
    };

    componentDidMount() {
        moviesAPI.fetchPopularTVShows().then(movies => this.setState({ movies: movies }));
    };

    render() {
        const { movies } = this.state;
        return (
            <>
                <div>
                    <h1>Trending Today</h1>
                    {movies.length > 0 && (
                        <ul>
                            {movies.map(movie => (
                                <li key={movie.id}>
                                    <Link to={`movies/${movie.id}`}>
                                        {movie.original_title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </>
        );
    }
}

export default HomePage;