import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Home = () => {
  
    const {user}= useContext(AuthContext)

    return (
        <div>
            <h2>This is home. {user &&  <h5>{user.displayName}</h5> }  </h2>
        </div>
    );
};

export default Home;