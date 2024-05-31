import { useState } from "react";
import React from "react";
const UserDataDisply = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/posts").then((result) => {
    //         result.json().then((resp) => {
    //             console.log(resp)
    //             setData(resp)
    //         }).catch(Error => (console.log(Error)))
    //     })
    // }, [])


    // console.log(data)

    const fetchdata = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <h1>Usre data</h1>
            <button onClick={() => fetchdata()}>
                api call
            </button>
            <table border="1" style={{ textAlign: "center" }}>
                <thead >
                    <tr>
                        <td>ID</td>
                        <td>Userid</td>
                        <td>title</td>
                        <td>body</td>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.userId}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserDataDisply;

