import React, { useState } from 'react';
import '../../styles/AddDataModal.css';
import Modal from 'react-bootstrap-modal';

const AddDataModal = (props) => {
    const { addModalOpen, toggleAddModal } = props;
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const saveUserData = () => {
        if (title !== '' && body !== '') {
            const data = {
                title: title,
                body: body
            };
            props.addUserData(data);   // Call the prop function to add data
            setBody('');
            setTitle('');
            toggleAddModal();
        } else {
            alert("Please fill all the fields")
        }

    }

    return (
        <>

            <Modal
                show={addModalOpen}
                onHide={toggleAddModal}
                aria-labelledby="ModalHeader"

            >
                <Modal.Header>
                    <Modal.Title id='ModalHeader'>Add New User</Modal.Title>
                    <button onClick={toggleAddModal} className="closeIcone"><i className="fa fa-times" aria-hidden="true"></i></button>
                </Modal.Header >
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
                            <button onClick={() => toggleAddModal()}>cancel</button>
                            <button onClick={saveUserData}>save</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
};



export default AddDataModal;