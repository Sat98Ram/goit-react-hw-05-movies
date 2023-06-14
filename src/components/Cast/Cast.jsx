import { useEffect, useState } from 'react';
import { getCast } from 'services/movies-service';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import { Section } from 'components/Section/Section';
import { CastItem } from './CastItem';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    getCast(movieId)
      .then(data => {
        setCast(data);
      })
      .catch(e => console.log(e));
  }, [movieId]);

  return (
    <Section title="Cast">
      <ul className={css.castList}>
        {cast?.map(member => {
          return (
            <CastItem
              profile={member.profile_path}
              name={member.name}
              role={member.character}
              key={member.cast_id}
            />
          );
        })}
      </ul>
    </Section>
  );
};
export default Cast;
