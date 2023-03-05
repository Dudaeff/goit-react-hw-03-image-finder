import PropTypes from 'prop-types';

import { Header, SearchForm, SearchFormButton, SearchFormInput } from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
    return (
        <Header>
            <SearchForm onSubmit={onSubmit}>
                <SearchFormButton type="submit" className="SearchForm-button">
                    Search
                </SearchFormButton>

                <SearchFormInput
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </SearchForm>
        </Header>
    );
};

export { Searchbar };

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};