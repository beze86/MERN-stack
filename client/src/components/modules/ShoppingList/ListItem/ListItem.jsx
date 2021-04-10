import { useState, useEffect } from 'react';
import { DeleteOutlined } from '@material-ui/icons';
import clsx from 'clsx';
import axios from 'axios';

import styles from './ListItem.module.scss';

export const ListItem = ({ data, deleteItem }) => {
    const [urgencyClassColor, setUrgencyClassColor] = useState('');

    useEffect(() => {
        switch (data.urgency) {
            case "High":
                setUrgencyClassColor('urgent');
                break;
            default:
                setUrgencyClassColor('low');
        }
    }, [])

    const handleClickDelete = () => {
        axios.delete(`${process.env.REACT_APP_API_URL}/shopping-list/item/${data._id}`)
        .then(() => {
            deleteItem(data._id)
        })
        .catch((err) => {
            throw err
        })
    }

    const urgencyClass = clsx(styles.urgency, styles[`urgency-${urgencyClassColor}`])

    return (

        <div className={styles.wrapper} data-id={data._id}>
            <span className={styles.item}>{data.item}</span>
            <span className={urgencyClass}>{data.urgency}</span>
            <DeleteOutlined className={styles['delete-icon']} color="error" onClick={handleClickDelete} />
        </div>
    )
}