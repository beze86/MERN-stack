import React, { useEffect, useState, createRef } from 'react';
import { shuffle } from '../../../utils';

import { DataTable } from '../../reusables/Table/Table';
import Modal from '@material-ui/core/Modal';
import { ModalBody } from './ModalBody/ModalBody';
import axios from 'axios';


export const Users = () => {
    

    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [userModify, setUserModify] = useState({});

    useEffect(() => {
        const usersApi = axios.get('http://localhost:3003/users');
        const areasApi = axios.get('http://localhost:3003/house-areas');

        axios.all([usersApi, areasApi])
        .then(axios.spread((...responses) => {
           const users = responses[0];
           const areas = responses[1];
            return {users, areas};
        }))
        .then((obj) => {
            shuffle(obj.areas.data);
            return obj
        })
        .then((obj) => {
            const weeklyTasksData = obj.users.data.map((user, i) => {
                return {
                    id: user._id,
                    area: obj.areas.data[i].area,
                    name: user.name,
                    color: user.color
                }
            });
            setData(weeklyTasksData)
        });        
    }, [])

    const handleOpen = (e) => {
        setUserModify(e.row)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const ref = createRef();

    return (
        <div className="">
            <DataTable data={data} openModal={handleOpen} />
            <Modal
                open={open}
                onClose={handleClose}>
                <div className="">
                    <ModalBody user={userModify} ref={ref} closeModal={handleClose}/>
                </div>
            </Modal>
        </div>
    )
}
