import React, { Component, Suspense } from 'react';
import moviesAPI from '../services/api';
import Loader from '../components/Loader';

const HomePageList = React.lazy(() => import('../components/HomePageList'));
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
                            <Suspense fallback={<Loader />}>
                                {movies.map(movie => (
                                    <HomePageList key={movie.id} movie={movie} />
                                ))}
                            </Suspense>
                        </ul>
                    )}
                </div>
            </>
        );
    }
}

export default HomePage;