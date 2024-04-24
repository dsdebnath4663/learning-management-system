import React from 'react';
import ReactDOMServer from 'react-dom/server';

const ReviewHighlighter = ({ originalString, startIndex, endIndex, sentiment, tooltipTopic }) => {
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
  };

  let slicedContent = originalString.slice(startIndex, endIndex);
  let highlightedContent = (
    <span style={{ backgroundColor: getSentimentColor(sentiment) }} title={tooltipTopic}>
      {slicedContent}
    </span>
  );

  let highlightedString = ReactDOMServer.renderToString(highlightedContent);
  let replacedContent = originalString.replace(slicedContent, highlightedString);

  return <div dangerouslySetInnerHTML={{ __html: replacedContent }} />;
};

export default ReviewHighlighter;
