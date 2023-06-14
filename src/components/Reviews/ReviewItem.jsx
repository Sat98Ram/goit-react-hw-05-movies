import css from './Reviews.module.css';

export const ReviewItem = ({ author, date, content }) => {
  return (
    <li className={css.reviewItem}>
      <div>
        <h3 className={css.reviewAuthor}>Author: {author}</h3>
        <p className={css.reviewDate}>{date}</p>
      </div>

      <p>{content}</p>
    </li>
  );
};

//  {
//    /* {review.author_details.avatar_path && (
//           <img
//             src={getAvatar(review.author_details.avatar_path)}
//             alt="avatar"
//           />
//         )} */
//  }
