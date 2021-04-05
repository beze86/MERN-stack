import { useState, useEffect } from 'react';
import { DeleteOutlined } from '@material-ui/icons';
import clsx from 'clsx';

import styles from './ListItem.module.scss';

export const ListItem = ({ data }) => {
    const [urgencyClassColor, setUrgencyClassColor] = useState('');

    useEffect(() => {
        switch (data.urgency) {
            case "High":
                setUrgencyClassColor('alarm');
                break;
            case "Mid":
                setUrgencyClassColor('warning');
                break;
            case "Normal":
                setUrgencyClassColor('normal');
        }
    }, [])

    const urgencyClass = clsx(styles.urgency, styles[`urgency-${urgencyClassColor}`])

    return (

        <div className={styles.wrapper}>
            <span className={styles.item}>{data.item}</span>
            <span className={urgencyClass}>{data.urgency}</span>
            <DeleteOutlined color="error" />
        </div>
    )
}