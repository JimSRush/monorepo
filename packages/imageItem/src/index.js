import React from 'react';
import Proptypes from 'prop-types';
import cn from 'classnames';
import styles from './ImageItem.module.css';

const cx = cn.bind(styles);

const ImageItem = ({
    image,
    buttonText,
    onClick
}) => {
    return <div className={cx(styles.imageGridItem)}>
        <div >
            <div className={cx(styles.imageGridWrapper)}>
                <img src={image} className={cx(styles.image)}/>
            </div>
            <div className={cx(styles.imageGridFooter)}>
                <button onClick={onClick} className={cx(styles.viewButton)}>{buttonText} &#8594;</button>
            </div>
        </div>
    </div>

};

export default ImageItem;