import { WrapperUser } from './UserMenu.styled';

export const UserMenu = ({ onLogOut, user: { avatar } }) => {
  return (
    <WrapperUser>
      <p>User menu</p>
      <img src={avatar} alt="avatar" width="40" height="40" />

      <button type="button" onClick={onLogOut}>
        Log out
      </button>
    </WrapperUser>
  );
};
