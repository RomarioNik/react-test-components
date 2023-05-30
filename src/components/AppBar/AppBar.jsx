import { useContext } from 'react';
import authContext from '../../contexts/auth/context.js';
import Navigation from './Navigation';
import { UserMenu } from './UserMenu';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  const { user, isLoggedIn, onLogin, onLogOut } = useContext(authContext);

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? (
        <UserMenu onLogOut={onLogOut} user={user} />
      ) : (
        <button type="button" onClick={onLogin}>
          SignUp
        </button>
      )}
    </Header>
  );
};
