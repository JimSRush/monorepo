import React from 'react';
import Proptypes from 'prop-types';
import cn from 'classnames';
import styles from './Widebar.module.css';
const cx = cn.bind(styles);

console.log("styles", styles);

const Widebar = ({
  text
}) => (
  <div className={cx(styles.widebar, styles.widebarAlert)}>
    {text}
  </div>
);

Widebar.propTypes = {
  text: Proptypes.string
}

export default Widebar;
