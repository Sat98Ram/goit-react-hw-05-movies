import { Container } from 'components/Container/Container';
import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <Container>
        {title && <h2 className={css.sectionTitle}>{title}</h2>}
        {children}
      </Container>
    </section>
  );
};
