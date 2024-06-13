import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap-modal';
import '../../styles/AddDataModal.css';
const AddAndEditData = (props) => {
    const { typeOfModal, toggalModalOpen, toggleModal, usertitle, description, updateUserIndexNo, handleUpdate } = props;
    const [title, setTitle] = useState(' ');
    const [body, setBody] = useState(' ');
    useEffect(() => {
        setTitle(usertitle)
        setBody(description)
    }, [usertitle, description, updateUserIndexNo])
    // const saveUserData = () => {
    //     if (title !== '' && body !== '') {
    //         const data = {
    //             title: title,
    //             body: body
    //         };
    //         props.addUserData(data);   // Call the prop function to add data
    //         setBody('');
    //         setTitle('');
    //         toggleModal();
    //     } else {
    //         alert("Please fill all the fields")
    //     }
    // }


    // const saveUpdetUserData = () => {
    //     if (title !== '' && body !== '') {
    //         handleUpdate(title, body)
    //         setBody('')
    //         setTitle('')
    //         toggleModal()
    //     }
    //     else {
    //         alert("Please fill all the fields")
    //     }
    // }

    const addAndEditUserData = () => {

        if (typeOfModal === "add") {
            if (title !== '' && body !== '') {
                const data = {
                    title: title,
                    body: body
                };
                props.addUserData(data);   // Call the prop function to add data
                setBody('');
                setTitle('');
                toggleModal();
            }
        } else {
            if (title !== '' && body !== '') {
                handleUpdate(title, body)
                setBody('')
                setTitle('')
                toggleModal()
            }
        }
    }

    const toggalModalClose = () => {
        setBody('')
        setTitle('')
        toggleModal()
    }
    return (
        <div>
            <Modal
                show={toggalModalOpen}
                onHide={toggalModalClose}
                aria-labelledby="ModalHeader"
            >
                <Modal.Header >
                    <Modal.Title id='ModalHeader'> {typeOfModal === "add" ? 'Add New User' : 'Update User Data'}</Modal.Title>
                    <button className="closeIcone" onClick={toggalModalClose}>
                        <img src="https://logowik.com/content/uploads/images/close1437.jpg" className='closeIconeImage' alt="closeImage" />
                    </button>

                </Modal.Header>
                <Modal.Body>
                    <form action="#" className='editform' onSubmit={(e) => { e.preventDefault() }}>
                        <div className='info'>
                            <label >Title:</label> {title === "" ? <span className='showerror'>Please fill the fields</span> : null}
                            <input type="text" name='title' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter Title' />
                        </div>
                        <div className='info'>
                            <label >description:</label> {body === "" ? <span className='showerror'>Please fill the fields</span> : null}
                            <textarea name="body" cols="27" rows="5" value={body} onChange={(e) => setBody(e.target.value)} placeholder='Enter description'></textarea>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <div className='infobutton'>
                        <button onClick={() => toggalModalClose()}>cancel</button>
                        <button onClick={addAndEditUserData} className='editbutton'>{typeOfModal === "add" ? "save" : "Update"}</button>

                        {/* {
                                typeOfModal === "add" ?
                                    <button onClick={saveUserData} className='editbutton'>save</button>
                                    :
                                    <button onClick={saveUpdetUserData} className='editbutton'>Update</button>
                            } */}
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    )

}


export default AddAndEditData;