import { useState, useMemo } from 'react';
import authContext from './context';
import avatar from './avatar.png';

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLogin = () => {
    setUser({ name: 'Mango', avatar });
    setIsLoggedIn(true);
  };

  const onLogOut = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const providerValue = useMemo(() => {
    return { user, isLoggedIn, onLogin, onLogOut };
  }, [isLoggedIn, user]);

  return <authContext.Provider value={providerValue}>{children}</authContext.Provider>;
};

export default Provider;
