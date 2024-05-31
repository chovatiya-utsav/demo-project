import { useEffect, useState } from "react";
import Modal from "react-bootstrap-modal";

const UpdateUserData = ({ id, data, handleUpdate, isopen, onclose }) => {
    const [userId, setUserId] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        if (data && data.length > 0 && id !== 0) {
            const selectedItem = data.find((item) => item.id === id);
            if (selectedItem) {
                setUserId(selectedItem.userId);
                setTitle(selectedItem.title);
                setBody(selectedItem.body);
            }
        }
    }, [id, data]);
    useEffect(() => {
        if (!isopen) {
            setUserId('');
            setTitle('');
            setBody('');
        }
    }, [isopen]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'userid') {
            setUserId(value);
        } else if (name === 'title') {
            setTitle(value);
        } else if (name === 'body') {
            setBody(value);
        }
    };
    const saveChanges = () => {
        handleUpdate(userId, title, body);
        onclose(); // Close the modal after saving changes
    };
    return (
        <Modal
            show={true}
            onHide={onclose}
            aria-labelledby="ModalHeader"
        >
            <Modal.Header closeButton>
                <Modal.Title id='ModalHeader'>A Title Goes here</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <label >ID :</label>
                    <input type="text" name='ID' value={id} />
                </div>
                <div>
                    <label >userId:</label>
                    <input type="text" name='userid' value={userId} onChange={handleChange} />
                </div>
                <div>
                    <label >Title:</label>
                    <input type="text" name='title' value={title} onChange={handleChange} />
                </div>
                <div>
                    <label >Body:</label>
                    <textarea name="body" value={body} onChange={handleChange} />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className='btn btn-default' onClick={onclose}>Cancel</button>
                <button className='btn btn-primary' onClick={saveChanges}>
                    Save
                </button>
            </Modal.Footer>
        </Modal>
    )
}

export default UpdateUserData;