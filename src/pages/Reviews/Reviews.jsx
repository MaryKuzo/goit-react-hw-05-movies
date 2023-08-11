import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { getMovieReview } from 'services/FetchApi';
import {
  ReviewsContainer,
  ReviewItem,
  Author,
  Content,
  AuthorSpan,
  ReviewsSpan
} from './Reviews.styled';



const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();


  useEffect(() => {
    getMovieReview(movieId)
      .then(data => {
        setReviews(data);
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  if (!reviews) {
    return
  }

  return (
    <>
      <ReviewsContainer>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(({ id, author, content }) => (
              <ReviewItem key={id}>
                <Author>Author: <AuthorSpan>{author}</AuthorSpan></Author>
                <Content>{content}</Content>
              </ReviewItem>
            ))}
          </ul>
        ) : (
          <ReviewsSpan>No Reviews</ReviewsSpan>
        )}
      </ReviewsContainer>
    </>
  )
}
export default Reviews
