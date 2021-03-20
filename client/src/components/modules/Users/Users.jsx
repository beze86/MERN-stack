import React, { useEffect, useState, createRef } from 'react';
import { DataTable } from '../../reusables/Table/Table';
import CleanHouseTasks from '../../../utils/randomize-tasks';
import Modal from '@material-ui/core/Modal';
import { ModalBody } from './utils/ModalBody';


export const Users = () => {
    

    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [userModify, setUserModify] = useState({});

    useEffect(() => {
        let calendar = new CleanHouseTasks().cleaningTask();
        setData(calendar)
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
