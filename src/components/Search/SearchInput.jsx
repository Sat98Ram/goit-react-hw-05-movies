import { useState } from 'react';
import css from './Search.module.css';

export const Search = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = event => {
    const { value } = event.target;
    setSearch(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(search);
    onSubmit(search);
  };

  return (
    <form onSubmit={handleSubmit} className={css.searchForm}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={search}
        onChange={handleChange}
        className={css.searchInput}
      />
      <button className={css.btnSearch}>Search</button>
    </form>
  );
};
