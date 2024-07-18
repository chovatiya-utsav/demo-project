import React, { useEffect, useState } from 'react'
import Hader from '../commonComponet/layout/hader/Hader';
import '../../styles/homepage-componet/Home.css'
// import AddDataModal from '../commonComponet/AddDataModal';
// import UpdateDataModal from '../commonComponet/UpdateDataModal';
import AddAndEditData from '../commonComponet/AddAndEditData';
import ProgressBar from '../commonComponet/ProgressBar';

const Contactus = () => {
    const [userData, setUserData] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);
    // const [addModalOpen, setAddModalOpen] = useState(false);
    // const [updateModalOpen, setUpdateModalOpen] = useState(false);
    const [typeOfModal, setTypeOfModal] = useState("add");
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [updateUserIndexNo, setUpdateUserIndexNo] = useState('');
    const [toggalModalOpen, setToggalModalOpen] = useState(false);
    const [ProgressBarFill, setProgressBarFill] = useState(0);
    const [ProgressBarColor, setProgressBarColor] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts').then((result) => {
                result.json().then((resp) => {
                    setUserData(resp);
                })
            })
            setProgressBarFill(100);
        }, [2000])
    }, [])
    const handelProgressBar = () => {
        if (ProgressBarFill !== 0) {
            setProgressBarFill(ProgressBar - 100)
        }
    }

    const userDataDelete = (id) => {
        if (selectedIds.length === 0) {
            alert("user id " + id + " no deleted");
            const newUserData = userData.filter((item, i) => {
                // return item.id !== index;
                if (id === i + 1) {
                    userData.splice(i, 0)
                    return false
                }
                return true
            })
            setUserData(newUserData);
        } else {
            alert("Unselect the selected box")
        }
    }

    const toggleSelect = (id) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter(selectedId => selectedId !== id));
        } else {
            setSelectedIds([...selectedIds, id]);
            console.log([...selectedIds, id])
        }
    };

    const selectedDataDelete = () => {
        alert("This id " + selectedIds.sort(function (a, b) { return a - b }) + " No User is Deleted")
        function selecteduserremove(Data, indexNo) {
            if (selectedIds.includes(indexNo + 1)) {
                userData.splice(indexNo, 0);
                console.log(indexNo + 1, 0)
                return false;
            }
            return true;
        }
        const filteredData = userData.filter(selecteduserremove);
        setUserData(filteredData);
        setSelectedIds([]);
    }



    const addUserData = (data) => {
        // Add the new data to the existing user data array
        // setUserData([...userData, data]);
        // Add the new data to the existing user data array
        userData.push(data)
        setProgressBarFill(100);
        setProgressBarColor('#3fea06')
    };


    // const toggleAddModal = (id) => {
    //     setAddModalOpen(!addModalOpen)
    // }

    // const userDataUpdate = (id) => {
    //     // setUpdateModalOpen(true)
    //     setUpdateUserIndexNo(id);
    //     const selecteddata = userData.at(id)
    //     setTitle(selecteddata.title)
    //     setBody(selecteddata.body)
    // }

    function handleUpdate(title, body) {
        const updatedData = userData.map((item, i) => {
            if (i === updateUserIndexNo) {
                console.log(title, body)
                return {
                    ...item,
                    title: title,
                    body: body
                };
            }
            return item;
        });
        setUserData(updatedData);
        setProgressBarFill(100);
        setProgressBarColor("#fff709")
        // setUpdateModalOpen(false); // Close the modal after update
    }

    // const toggalUdateModal = () => {
    //     setUpdateModalOpen(!updateModalOpen)
    // }

    const toggleModal = () => {
        setToggalModalOpen(!toggalModalOpen)
    }

    const openeditmodal = () => {
        handelProgressBar()
        setTypeOfModal("add");
        setToggalModalOpen(true);
    }

    const userDataUpdate = (id) => {
        setTypeOfModal("edit")
        setUpdateUserIndexNo(id);
        const selecteddata = userData.at(id)
        setTitle(selecteddata.title)
        setBody(selecteddata.body)
        setToggalModalOpen(true)
        handelProgressBar()
    }

    return (
        <div className='userDetail'>

            <Hader />
            <ProgressBar loding={ProgressBarFill} progressbarColor={ProgressBarColor} />
            <div className='userHeding'>
                <h1>User Data</h1>
                <div>
                    <button onClick={() => { selectedDataDelete() }}>Selected Data Delete</button>
                    <button onClick={openeditmodal} >Add Data</button>
                </div>
            </div>
            {/* <AddDataModal toggleAddModal={toggleAddModal} addModalOpen={addModalOpen} addUserData={addUserData} />
            <UpdateDataModal toggalUdateModal={toggalUdateModal} usertitle={title} description={body} updateModalOpen={updateModalOpen} handleUpdate={handleUpdate} /> */}
            <AddAndEditData typeOfModal={typeOfModal} toggleModal={toggleModal} toggalModalOpen={toggalModalOpen} id={updateUserIndexNo} usertitle={title} description={body} userDataUpdate={userDataUpdate} handleUpdate={handleUpdate} addUserData={addUserData} />
            <div className='displaydata'>
                {
                    userData.length > 0 ?
                        <table>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Title</th>
                                    <th>description</th>
                                    <th colSpan="3">Edit User</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userData.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.title}</td>
                                                <td>{item.body}</td>
                                                <td>
                                                    <input type="checkbox" checked={selectedIds.includes(index + 1)} onChange={() => toggleSelect(index + 1)} />
                                                </td>
                                                <td><button onClick={() => { userDataDelete(index + 1) }}>Delete</button></td>
                                                {/* <td><button onClick={() => { userDataUpdate(index) }}>Update</button></td> */}
                                                <td><button onClick={() => { userDataUpdate(index) }}>Update</button></td>
                                            </tr>
                                        )
                                    })
                                }
                                {/* {userData && userData.length > 0 ? (
                            // Render table rows if data is not empty
                            userData.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.userId}</td>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                    <td>
                                        <input type="checkbox" checked={selectedIds.includes(item.id)} onChange={() => toggleSelect(item.id)} />
                                    </td>
                                    <td><button onClick={() => { userDataDelete(item.id) }}>Delete</button></td>
                                </tr>
                            ))
                        ) : (
                            // Show loading message if data is still being fetched or if data is null
                            <tr>
                                <td colSpan="6">Loading...</td>
                            </tr>
                        )} */}
                            </tbody>
                        </table>
                        : <div className='loding-div'>
                            <div className='loder-heding' >Loding...</div>
                            <div className='loder'></div>
                        </div>
                }
            </div>
        </div >
    )
}

export default Contactus;