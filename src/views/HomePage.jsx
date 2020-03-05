import React, { Component } from 'react';
import moviesAPI from '../services/api';
import HomePageList from '../components/HomePageList';
class HomePage extends Component {
    state = {
        movies: [],
    };

    componentDidMount() {
        moviesAPI.fetchPopularTVShows().then(movies =>
            this.setState({ movies: movies }));
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
                                <HomePageList key={movie.id} movie={movie} />
                            ))}
                        </ul>
                    )}
                </div>
            </>
        );
    }
}

export default HomePage;