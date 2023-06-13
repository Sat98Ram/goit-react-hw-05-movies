import { useEffect, useState } from 'react';
import { getCast } from 'services/movies-service';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import { Section } from 'components/Section/Section';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    getCast(movieId).then(data => {
      setCast(data).catch(e => console.log(e));
    });
  }, [movieId]);

  return (
    <Section title="Cast">
      <ul className={css.castList}>
        {cast?.map(member => {
          return (
            <li key={member.cast_id} className={css.castCard}>
              <div className={css.imageWrap}>
                {member.profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${member.profile_path}`}
                    alt="actor"
                    className={css.castImg}
                    // width="120"
                  />
                )}
              </div>
              <div className={css.cardText}>
                {' '}
                <p className={css.castName}>{member.name}</p>
                <p>Role: {member.character}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};
export default Cast;
