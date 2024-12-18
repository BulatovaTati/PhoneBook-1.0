import PropTypes from 'prop-types';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
const noPosterImg = 'https://sd.keepcalms.com/i/sorry-no-picture-available-2.png';

const ImagePosterPath = ({ path, alt }) => (
  <img src={`${!path ? noPosterImg : BASE_IMG_URL + path}`} alt={alt} />
);

export default ImagePosterPath;

ImagePosterPath.propTypes = {
  path: PropTypes.string,
  alt: PropTypes.string,
};
