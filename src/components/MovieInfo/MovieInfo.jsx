import css from './MovieInfo.module.css';

export const MovieInfo = ({ poster, title, overview, genres, date, votes }) => {
  return (
    <div className={css.movie}>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster}`}
        alt="poster"
        width="320"
        className={css.poster}
      />
      <div>
        <h1>{title}</h1>
        <p>User popularity: {Math.round(votes * 10)}%</p>
        <h2 className={css.subTitle}>Overview</h2>
        <p>{overview}</p>
        <h2 className={css.subTitle}>Genres</h2>
        <ul>
          {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
        <h2 className={css.subTitle}>Release date:</h2> <p>{date}</p>
      </div>
    </div>
  );
};
