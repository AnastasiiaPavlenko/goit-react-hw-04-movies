import React, { Component } from 'react';
import moviesAPI from '../services/api';
import ReviewsList from '../components/ReviewsList';

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
                    {reviews.map(review => (
                        <ReviewsList key={review.id} review={review} />
                    ))}
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