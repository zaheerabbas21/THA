import {useContext} from 'react';
import AuthContext from './context/auth/authContext'

const Home = () => {
    const authContext = useContext(AuthContext);
    const {loading, isLoggedIn, login, logout} = authContext;

  return (
    <div>
      <h1>Home</h1>
      <h2>{`If not logged in cant access, Profile & Dashboard`}</h2>
      {
          loading ?  <p>Loading...</p>: (isLoggedIn ? <button onClick={logout}>Logout</button> : <button onClick={login}>Login</button>)
      }
    </div>
  );
};

export default Home;
