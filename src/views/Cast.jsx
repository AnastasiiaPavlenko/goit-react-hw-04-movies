import React, { Component, Suspense } from 'react';
import moviesAPI from '../services/api';
import Loader from '../components/Loader';

const CastList = React.lazy(() => import('../components/CastList'));

class Cast extends Component {
    state = {
        cast: null,
    };

    componentDidMount() {
        moviesAPI.fetchCastDetails(this.props.match.params.movieId).then(cast => this.setState({ cast }));
    };

    render() {
        const { cast } = this.state;
        const imgSrc = (profile_path) => {
            return profile_path != null ? `https://image.tmdb.org/t/p/w92${profile_path}` : 'https://www.novelupdates.com/img/noimagefound.jpg';
        };

        return (<>
            {cast && (
                <ul>
                    <Suspense fallback={<Loader />}>
                        {cast.map(cast => (
                            <CastList key={cast.id} cast={cast} src={imgSrc(cast.profile_path)} />
                        ))}
                    </Suspense>
                </ul>
            )}
        </>
        )
    }
};

export default Cast;