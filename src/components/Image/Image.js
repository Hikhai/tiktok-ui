import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import styles from './Image.module.scss';
import images from '~/assets/images';
function Image({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) {
  const [fallback, setFallback] = useState('');
  return (
    <img
      className={classNames(styles.wrapper, className)}
      ref={ref}
      src={fallback || src}
      alt={alt}
      {...props}
      onError={() => setFallback(customFallback)}
    />
  );
}

export default forwardRef(Image);
