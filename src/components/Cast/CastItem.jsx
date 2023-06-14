import css from './Cast.module.css';

export const CastItem = ({ profile, name, role }) => {
  return (
    <li className={css.castCard}>
      <div className={css.imageWrap}>
        {profile && (
          <img
            src={`https://image.tmdb.org/t/p/w500${profile}`}
            alt="actor"
            className={css.castImg}
          />
        )}
      </div>
      <div className={css.cardText}>
        <p className={css.castName}>{name}</p>
        <p>Role: {role}</p>
      </div>
    </li>
  );
};
