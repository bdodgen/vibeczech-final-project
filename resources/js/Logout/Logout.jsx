import axios from "axios";
import { useContext, useEffect, useState } from 'react';
import UserContext from '../Contexts/UserContext';
import getCurrentUser from "../getCurrentUser";

const Logout = () => {

  const { user, setUser } = useContext(UserContext);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(async () => {
    const user = await getCurrentUser();
    setCurrentUser(user)
  }, [])

  console.log(currentUser);

  const logout = async () => {
    try {

      const res = await axios.post('/logout');

      return res.data
    } catch (err) {
      console.log(err.message)
    };
  }

  const handleLogout = async () => {

    await logout();
    console.log('logging out');
    window.location.replace('/');

    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {!currentUser
        ?
        <></>
        :
        <div>
          <p>Hi, {currentUser.username}!</p>
          <p id='logout' onClick={handleLogout}>LOGOUT</p>
        </div>}

    </UserContext.Provider>
  )

}

export default Logout;