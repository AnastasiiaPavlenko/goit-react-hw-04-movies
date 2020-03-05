import React from 'react';
import PropTypes from 'prop-types';

const ReviewsList = ({ review }) => (
    <li>
        <h4>{review.author}</h4>
        <p>{review.content}</p>
    </li>
);

export default ReviewsList;

ReviewsList.propTypes = {
    review: PropTypes.object.isRequired,
};
