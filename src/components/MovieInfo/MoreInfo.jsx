import css from './MovieInfo.module.css';
import { Link } from 'react-router-dom';

export const MoreInfo = ({ state }) => {
  return (
    <>
      <p className={css.textInfo}>Additional information</p>
      <Link to={`reviews`} state={state} className={css.sectionLink}>
        Reviews
      </Link>
      <Link to={`cast`} state={state} className={css.sectionLink}>
        Cast
      </Link>
    </>
  );
};
