
import React, { useEffect, useState } from 'react';
import './DeleteAndUpdetUserData.css';
import UpdateUserData from './UpdateUserData';

const DeleteUserData = () => {
    const [data, setData] = useState(null);
    const [selectedIds, setSelectedIds] = useState([]);
    const [selectedId, setSelectedId] = useState(0);
    const [updetModalOpen, setupdetModalOpen] = useState(false);

    useEffect(() => {
        getList()
    }, [])

    function getList() {
        fetch('https://jsonplaceholder.typicode.com/posts').then((respons) => {
            respons.json().then((result) => {
                console.log(result)
                setData(result)
            })
        })
    }
    const deleteAttendee = (id) => {
        alert("This id " + id + " No User is Deleted")
        let filteredAttendees = data.filter((attendee) => attendee.id !== id);
        setData(filteredAttendees);
        //Delete recode from api
        // fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
        //     {
        //         method: 'DELETE'
        //     }).then((result) => {
        //         result.json().then((resp) => {
        //             console.log(resp)
        //             getList()
        //         })
        //     })
    };


    const toggleSelect = (id) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter(selectedId => selectedId !== id));
        } else {
            setSelectedIds([...selectedIds, id]);
            console.log([...selectedIds, id])
        }
    };
    const deleteSelected = () => {
        alert("This id " + [...selectedIds] + " No User is Deleted")
        const filteredData = data.filter(item => !selectedIds.includes(item.id));
        setData(filteredData);
        setSelectedIds([]);
    };

    function updateUser(id) {
        setSelectedId(id);
        setupdetModalOpen(true);
    }

    function handleUpdate(userId, title, body) {
        // Update the data in the parent component based on changes in the child component
        const updatedData = data.map((item) => {
            if (item.id === selectedId) {
                return {
                    ...item,
                    userId: userId,
                    title: title,
                    body: body
                };
            }
            return item;
        });
        setData(updatedData);
        setupdetModalOpen(false); // Close the modal after update
    }
    return (
        <>
        <UpdateUserData id={selectedId} data={data} handleUpdate={handleUpdate} isopen={updetModalOpen} onclose={() => setupdetModalOpen(false)} />
            <div className='UserData'>
                {/* <UpdateUserData id={selectedId} data={data} handleUpdate={handleUpdate} isopen={updetModalOpen} onclose={()=>setupdetModalOpen(false)}   /> */}
            </div>
            <div className='userDataDeleteComponet'>
                <div className='heding' >
                    <h1>Delete User</h1>
                    {/* <button onClick={() => deleteSelected()} className='button'>Delete Selected User</button> */}
                </div>
                <table className='data'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>userId</th>
                            <th>title</th>
                            <th>body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.length > 0 ? (
                            // Render table rows if data is not empty
                            data.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.userId}</td>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                    <td>
                                        {/* <input type="checkbox" checked={selectedIds.includes(item.id)} onChange={() => toggleSelect(item.id)} /> */}
                                        <input type="checkbox" onChange={() => toggleSelect(item.id)} />
                                    </td>
                                    <td><button onClick={() => deleteAttendee(item.id)}>Delete</button></td>
                                    <td><button onClick={() => updateUser(item.id)}>Update</button></td>
                                </tr>
                            ))
                        ) : (
                            // Show loading message if data is still being fetched or if data is null
                            <tr>
                                <td colSpan="6">Loading...</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}


export default DeleteUserData;