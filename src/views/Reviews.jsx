import React, { Component, Suspense } from 'react';
import moviesAPI from '../services/api';
import Loader from '../components/Loader';

const ReviewsList = React.lazy(() => import('../components/ReviewsList'));
class Reviews extends Component {
    state = {
        reviews: [],
    }

    componentDidMount() {
        moviesAPI.fetchReviews(this.props.match.params.movieId).then(reviews => this.setState({ reviews }));
    };

    render() {
        const { reviews } = this.state;
        return (<>
            {reviews && (
                <ul>
                    <Suspense fallback={<Loader />}>
                        {reviews.map(review => (
                            <ReviewsList key={review.id} review={review} />
                        ))}
                    </Suspense>
                </ul>
            )}
            {this.state.reviews.length === 0 && (
                <p>No reviews</p>
            )}
        </>
        )
    }
};

export default Reviews;