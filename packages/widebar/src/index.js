import React from 'react';
import Proptypes from 'prop-types';
import cn from 'classnames';
import styles from './Widebar.module.css';
const cx = cn.bind(styles);

console.log("styles", styles);

const Widebar = ({
  text,
  type
}) => (
  <div className={cx({
      [styles.widebar]: true,  
      [styles.widebarAlert]: type === Widebar.TYPE_ALERT,
      [styles.widebarBlack]: type === Widebar.TYPE_BLACK
    })}>
      {text}
  </div>
);

Widebar.propTypes = {
  text: Proptypes.string,
  type: Proptypes.string
}

Widebar.TYPE_ALERT = 'TYPE_ALERT';
Widebar.TYPE_BLACK = 'TYPE_BLACK';

export default Widebar;
