import PropTypes from 'prop-types';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
const noPosterImg =
  'https://upload.wikimedia.org/wikipedia/commons/b/ba/No_image_available_400_x_600.svg';

const ImagePosterPath = ({ path, alt }) => {
  const imagePath = path ? `${BASE_IMG_URL}${path}` : noPosterImg;
  const imageAlt = alt || 'No poster available';

  return <img src={imagePath} alt={imageAlt} />;
};

export default ImagePosterPath;

ImagePosterPath.propTypes = {
  path: PropTypes.string,
  alt: PropTypes.string,
};
