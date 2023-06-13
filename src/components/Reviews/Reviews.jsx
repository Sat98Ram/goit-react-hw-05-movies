import { useEffect, useState } from 'react';
import { getReviews } from 'services/movies-service';
import { useParams } from 'react-router-dom';
import { Section } from 'components/Section/Section';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviews(movieId).then(data => {
      setReviews(data).catch(e => console.log(e));
    });
  }, [movieId]);

  //   const getAvatar = url => {
  //     let avatar = `https://image.tmdb.org/t/p/w500${url}`;
  //     if (avatar) {
  //   avatar.slice(0)}
  //     return avatar;
  // };
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
          <li key={review.id} className={css.reviewItem}>
            {/* {review.author_details.avatar_path && (
              <img
                src={getAvatar(review.author_details.avatar_path)}
                alt="avatar"
              />
            )} */}
            <div>
              <h3 className={css.reviewAuthor}>Author: {review.author}</h3>
              <p className={css.reviewDate}>{review.created_at.slice(0, 10)}</p>
            </div>

            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
};
export default Reviews;
