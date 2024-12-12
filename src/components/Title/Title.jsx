import PropTypes from 'prop-types';

const Title = ({ level = 1, children }) => {
  const Title = `h${level}`;
  return <Title>{children}</Title>;
};

Title.propTypes = {
  str: PropTypes.string,
};

export default Title;
