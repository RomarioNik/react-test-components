import PropTypes from 'prop-types';
import { ButtonIco } from './IconButton.styled';

export const IconButton = ({ children, onClick, ...allyProps }) => {
  return (
    <ButtonIco type="button" onClick={onClick} {...allyProps}>
      {children}
    </ButtonIco>
  );
};

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};
