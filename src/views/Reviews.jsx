import React, { Component } from 'react';
import moviesAPI from '../services/api';

class Reviews extends Component {
    state = {
        reviews: null,
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
                        <li key={review.id}>
                            <h4>{review.author}</h4>
                            <p>{review.content}</p>
                        </li>
                    ))}
                </ul>
            )}
            {!reviews && (
                <p>No reviews</p>
            )}
        </>
        )
    }
};

export default Reviews;