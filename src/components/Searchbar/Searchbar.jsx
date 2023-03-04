import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
    return (
        <header className="Searchbar">
            <form className="SearchForm" onSubmit={onSubmit}>
                <button type="submit" className="SearchForm-button">
                    Search
                </button>

                <input
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    );
};

export { Searchbar };

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};