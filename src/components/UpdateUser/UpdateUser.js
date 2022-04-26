import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/user/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))

    }, [])
    const handleUpdateUser = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const updateUser = { name, email }

        // send data to the server
        const url = `http://localhost:5000/user/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser),
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                alert('Update Users added success fully !!!')
                event.target.reset();
            })

    }
    return (
        <div>
            <h2>Updating User {user.name}</h2>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" id="" placeholder='Name' required />
                <br />
                <input type="email" name="email" id="" placeholder='Email' required />
                <br />
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default UpdateUser;