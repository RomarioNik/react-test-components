import { useState } from 'react';
import { Wraper, Button, Menu, MenuItem } from './Dropdown.styled';

export const Dropdown = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <Wraper>
      <Button onClick={toggleMenu}>{isVisible ? 'Close' : 'Open'}</Button>

      {isVisible && (
        <Menu>
          <MenuItem>Menu 1</MenuItem>
          <MenuItem>Manu 2</MenuItem>
        </Menu>
      )}
    </Wraper>
  );
};
