import React from 'react';
import styles from './PlaylistItem.module.css';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faTimes);

import Proptypes from 'prop-types';

const cx = cn.bind(styles);

const PlaylistItem = ({
    title,
    duration,
    broadcast,
    date,
    hasDivider,
    selected
}) => (
    <div className={cx({
        [styles.playlistItem]: true, 
        [styles.divider]: hasDivider,
        [styles.selected]: selected
    })}>
        <div>
            <div>
                <a className={cx(styles.playlistTitle)}>{title}&nbsp;</a>
                <span className={cx(styles.playlistDuration)}>{duration}</span>
                <FontAwesomeIcon icon="times" className={styles.remove}/>
            </div>
            <div className={cx(styles.playlistItemFooter)}>
                <span className={cx(styles.playlistItemProgramTitle)}>{broadcast}</span>
                <span>({date})</span>
            </div>
        </div>
    </div>
);

PlaylistItem.propTypes = {
    title: Proptypes.string,
    duration: Proptypes.string,
    broadcast: Proptypes.string,
    date: Proptypes.string,
    hasDivider: Proptypes.bool,
    selected: Proptypes.bool
}

export default PlaylistItem;