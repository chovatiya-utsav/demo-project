import React, { useEffect, useState } from 'react';
import '../../styles/AddDataModal.css';
import Modal from 'react-bootstrap-modal';

const UpdateDataModal = (props) => {
    const { updateModalOpen, toggalUdateModal, usertitle, description, handleUpdate } = props
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        setTitle(usertitle)
        setBody(description)
    }, [usertitle, description])

    const saveUpdetUserData = () => {
        if (title !== '' && body !== '') {
            handleUpdate(title, body)
            toggalUdateModal()
        }
        else {
            alert("Please fill all the fields")
        }
    }
    return (
        <div>
            <Modal
                show={updateModalOpen}
                onHide={toggalUdateModal}
                aria-labelledby="ModalHeader"
            >
                <Modal.Header >
                    <Modal.Title id='ModalHeader'>Update User Data</Modal.Title>
                    <button className="closeIcone" onClick={toggalUdateModal}><i className="fa fa-times" aria-hidden="true"></i></button>
                </Modal.Header>
                <Modal.Body>
                    <form action="#" className='editform' onSubmit={(e) => { e.preventDefault() }}>
                        <div className='info'>
                            <label >Title:</label>
                            <input type="text" name='title' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter Title' />
                        </div>
                        <div className='info'>
                            <label >description:</label>
                            <textarea name="body" cols="27" rows="5" value={body} onChange={(e) => setBody(e.target.value)} placeholder='Enter description'></textarea>
                        </div>
                        <div className='infobutton'>
                            <button onClick={() => toggalUdateModal()}>cancel</button>
                            <button onClick={saveUpdetUserData}>Update</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default UpdateDataModal;
