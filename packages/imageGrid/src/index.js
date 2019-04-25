import React from 'react';
import cn from 'classnames';
import styles from './ImageGrid.module.css';
import ImageItem from '../../imageItem/src';

const cx = cn.bind(styles);

const ImageGrid = ({
    images,
}) => {
    return <div className={cx(styles.imageGrid)}>
        {images.map(function(image) {
            return <ImageItem image={image.src} buttonText={image.text}/>
        })}
    </div>

};

export default ImageGrid;