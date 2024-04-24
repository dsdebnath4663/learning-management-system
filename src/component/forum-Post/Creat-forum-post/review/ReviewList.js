import React, { useState, useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';

import "./ReviewList.css"; // Import your custom CSS file

import reviewsData from './data/reviews.json';


const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  /**
   * ### Task 1: Setup and Display Reviews
   */
  useEffect(() => {
    setReviews(reviewsData);
  }, []);


  const highlightSentences = (originalString, startIndex, endIndex, sentiment, tooltipTopic) => {

    let slicedContent = originalString.slice(startIndex, endIndex);
    // Create a JSX element for the highlighted text with a tooltip
    let highlightedContent = (
      <span style={{ backgroundColor: getSentimentColor(sentiment) }} title={tooltipTopic}>
        {slicedContent}
      </span>
    );

    console.log("slicedContent : ", slicedContent)

    // Convert JSX element to string using ReactDOMServer
    let highlightedString = ReactDOMServer.renderToString(highlightedContent);
    console.log("highlightedString : ", highlightedString)


    // Replace the sliced content with the highlighted version
    let replacedContent = originalString.replace(slicedContent, highlightedString);
    console.log("replacedContent : ", replacedContent)

    return replacedContent;
  }


  const getSentimentColor = (sentiMent) => {
    let colorCode;
    switch (sentiMent) {
      case "Positive":
        colorCode = "#D9F2DD";
        break;
      case "Negative":
        colorCode = "#F2DBD9";
        break;
      case "Mixed":
        colorCode = "#e8bd6d3d";
        break;
      case "Neutral":
        colorCode = "#eaf09b6b";
        break;
      default:
        colorCode = "black";
    }
    return colorCode;
  }
  const StarRating = (rating) => {

    const maxRating = 10; // Maximum rating value
    const stars = [];


    const filledStars = Math.round((rating / maxRating) * 5);


    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= filledStars ? 'star-filled' : 'star-empty'}>
          &#9733; {/* Unicode star character */}
        </span>
      );
    }

    return <div className="star-rating">{stars}</div>;
  };

  return (
    <div className="col-10">
      <div className='container'>
        <div className='row justify-content-center padding'>
          <ul >
            {reviews.map(review => (
              <li key={review.review_id} className="review-list">


                <div class="review-info">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src="https://seeklogo.com/images/T/tripadvisor-logo-E7BE3B9B79-seeklogo.com.png"
                      alt="TripAdvisor Logo"
                      className='logo'
                    />
                    <span className='marginLeft'>
                      <b>{review.reviewer_name}</b> wrote a review at <b> tripadvisor.com</b>
                    </span>
                  </div>
                  <div class="icons icon-group">
                    <i class="fa-solid fa-user-plus contact-icon"></i>
                    <i class="fas fa-save save-icon" ></i>
                    <i class="fa-solid fa-ellipsis three-dot-icon"></i>
                  </div>
                </div>




                <span className="review-info">

                  <p>{StarRating(review.rating_review_score)}</p>
                  <p>{review.date}</p>
                </span>






                {review.analytics && review.analytics.map(analytic => (
                  <div key={analytic.category}>
                    {
                      analytic.highlight_indices.map(indices => (
                        // <p>Start Index: {indices[0]}, End Index: {indices[1]}, Sentiment: {indices[2]}    </p>
                        <div dangerouslySetInnerHTML={{
                          __html:
                            highlightSentences(review.content, indices[0], indices[1], indices[2], analytic.topic)
                        }} />

                      ))
                    }
                  </div>
                ))}



              </li>
            ))}
          </ul>
        </div>
      </div></div>);


}

export default ReviewList;
