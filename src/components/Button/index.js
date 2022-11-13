import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function Button({
  children,
  primary,
  outline,
  rounded,
  text,
  size,
  disable,
  className,
  leftIcon,
  rightIcon,
  ...passProps
}) {
  let Comp = 'button';

  // remove event listener when btn is disable
  if (disable) {
    Object.keys(passProps).forEach((key) => {
      if (key.startsWith('on') && typeof passProps[key] === 'function') delete passProps[key];
    });
  }
  if (passProps.to) {
    Comp = Link;
  } else if (passProps.href) {
    Comp = 'a';
  }

  let classes = cx('wrapper', {
    primary,
    outline,
    [size]: size,
    rounded,
    text,
    disable,
    [className]: className,
  });

  return (
    <Comp className={classes} {...passProps}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  text: PropTypes.bool,
  disable: PropTypes.bool,
  size: PropTypes.string,
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
};

export default Button;
