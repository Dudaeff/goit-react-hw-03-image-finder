import PropTypes from 'prop-types';

const Button = ({ type, onClick, children }) => {
    return (<button type={type}  className='Button' onClick={onClick} >{children}</button>);
};

export { Button };

Button.propTypes = {
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};