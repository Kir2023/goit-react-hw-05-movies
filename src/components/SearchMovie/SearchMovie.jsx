import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import css from './SearchMovie.module.css';
import { useSearchParams } from 'react-router-dom';

export const SearchMovie = ({ onSubmit }) => {
  const [value, setValue] = useState('');
  const [searchText, setSearchText] = useState('');
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('query') || '';

  useEffect(() => {
    setSearchText(value);
  }, [value]);

  const handleQuery = e => {
    setValue(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchText.trim() === '') {
      alert('Please enter the name of serching film');
      return;
    }
    if (movieName === value) {
      alert(`You are already viewing the movies on query ${searchText}`);
      setValue('');
      return;
    }
    setSearchText(searchText.trim());
    onSubmit(searchText.trim());
    setValue('');
  };

  return (
    <form className={css.searchForm} onSubmit={handleSubmit}>
      <button type="submit" className={css.searchButton}>
        <span className={css.searchButtonLabel}>Search</span>
      </button>

      <input
        className={css.searchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={handleQuery}
        value={value}
      />
    </form>
  );
};

SearchMovie.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
