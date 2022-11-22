import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Admin() {

    const [user, setUser] = useState(null);

    const getCurrentUser = async () => {
        const response = await axios('/api/user');
        setUser(response.data)
    };

    useEffect(() => {
        getCurrentUser();
    }, [])

    return (
        <h1>Welcome, {user !== null && user.first_name}</h1>
    )
}