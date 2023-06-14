import { useEffect, useState } from 'react';
import { getReviews } from 'services/movies-service';
import { useParams } from 'react-router-dom';
import { Section } from 'components/Section/Section';
// import css from './Reviews.module.css';
import { ReviewItem } from './ReviewItem';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviews(movieId)
      .then(data => {
        setReviews(data);
      })
      .catch(e => console.log(e));
  }, [movieId]);

  if (reviews.length === 0) {
    return (
      <Section title="Reviews">
        <p>There are no reviews yet</p>
      </Section>
    );
  }

  return (
    <Section title="Reviews">
      <ul>
        {reviews.map(review => (
          <ReviewItem
            key={review.id}
            author={review.author}
            date={review.created_at.slice(0, 10)}
            content={review.content}
          />
        ))}
      </ul>
    </Section>
  );
};
export default Reviews;

//   const getAvatar = url => {
//     let avatar = `https://image.tmdb.org/t/p/w500${url}`;
//     if (avatar) {
//   avatar.slice(0)}
//     return avatar;
// };
