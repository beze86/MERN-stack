import React, { useEffect, useState } from 'react';
import { DataTable } from '../../reusables/Table/Table';
import CleanHouseTasks from '../../../utils/randomize-tasks';
import Modal from '@material-ui/core/Modal';
import { ModalBody } from './utils/ModalBody';


export const Users = () => {
    let calendar = new CleanHouseTasks().cleaningTask();

    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [userModify, setUserModify] = useState({});

    useEffect(() => {
        setData(calendar)
    }, [])

    const handleOpen = (e) => {
        setUserModify(e.row)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const ref = React.createRef();

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
