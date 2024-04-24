import React, { useState, useEffect } from 'react';
import ReviewHighlighter from './ReviewHighlighter'; // Import the ReviewHighlighter component
import reviewsData from './data/reviews.json';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(reviewsData);
  }, []);

  return (
    <div className="col-10">
      <div className='container'>
        <div className='row justify-content-center'>
          <ul>
            {reviews.map(review => (
              <li key={review.review_id}>
                <p>{review.rating_review_score}</p>
                <p>{review.reviewer_name}</p>Wrote a review at tripadvisor.com
                <p>{review.date}</p>
                {review.analytics && review.analytics.map(analytic => (
                  <div key={analytic.category}>
                    {
                      analytic.highlight_indices.map(indices => (
                        <ReviewHighlighter
                          key={`${indices[0]}-${indices[1]}`}
                          originalString={review.content}
                          startIndex={indices[0]}
                          endIndex={indices[1]}
                          sentiment={indices[2]}
                          tooltipTopic={analytic.topic}
                        />
                      ))
                    }
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
