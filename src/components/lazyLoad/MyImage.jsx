import { LazyLoadImage } from 'react-lazy-load-image-component';
import CircularLoading from '../loading/CircularLoading'

/**
 * Renders an image component with lazy loading.
 *
 * @component
 * @param {Object} image - The image object.
 * @param {string} image.src - The source URL of the image.
 * @param {string} image.alt - The alternative text for the image.
 * @param {Object} image.style - The inline styles for the image.
 * @param {string} image.className - The CSS class name for the image.
 * @returns {JSX.Element} The rendered image component.
 */
const MyImage = ({ image }) => (
    <LazyLoadImage
      src={image.src}
      alt={image.alt}
      style={image.style}
      effect="blur"

      placeholder={<CircularLoading />}
    />
);

export default MyImage;