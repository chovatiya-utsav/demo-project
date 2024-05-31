import { useState } from 'react';
import './commonPages.css';

const SaveUserData = () => {
    const [userID, setUserID] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const saveUser = () => {
        console.log("data", userID, title, body);
        let data = {userID, title, body}
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            console.log(result)
        })
    }
    return (
        <div className='info'>
            <input type="number" name='userid' value={userID} onChange={(e) => { setUserID(e.target.value) }} placeholder='1    ' />
            <input type="text" name='title' value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder='title' />
            <input type="text" name='status' value={body} onChange={(e) => { setBody(e.target.value) }} placeholder='body' />
            <button type='button' onClick={saveUser}>Save User</button>
        </div>
    )
}

export default SaveUserData;