import { useState } from 'react';
import { ColorWraper, Title, ColorList, ColorItem } from './Colorpicker.styled';
import { colors } from '../../data';

export const Colorpicker = () => {
  const [activeColorIdx, setActiveColorIdx] = useState(0);

  const { label } = colors[activeColorIdx];

  const setActiveIndex = index => {
    if (activeColorIdx === index) {
      return;
    }

    setActiveColorIdx(index);
  };

  return (
    <ColorWraper>
      <Title>Color Picker = {label}</Title>
      <ColorList>
        {colors.map(({ label, color }, index) => (
          <ColorItem
            key={label}
            aria-label={label}
            bgcolor={color}
            onClick={() => setActiveIndex(index)}
            active={colors[activeColorIdx].color === color ? 1.2 : 1}
          ></ColorItem>
        ))}
      </ColorList>
    </ColorWraper>
  );
};
