import React from 'react';
import styles from './PlaylistItem.module.css';
import cn from 'classnames';

import Proptypes from 'prop-types';

const cx = cn.bind(styles);

const PlaylistItem = ({
    title,
    duration,
    broadcast,
    date,
    hasDivider
}) => (
    <div>
        <div>
            <div>
                <span>{title}</span>
                <span>{duration}</span>
            </div>
            <div>
                <span>{broadcast}</span>
                <span>{date}</span>
            </div>
        </div>
        <hr/>
    </div>
);

PlaylistItem.propTypes = {
    title: Proptypes.string,
    duration: Proptypes.string,
    broadcast: Proptypes.string,
    date: Proptypes.string,
    hasDivider: Proptypes.bool
}

export default PlaylistItem;