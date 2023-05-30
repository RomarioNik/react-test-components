import { useState } from 'react';
import { ButtonWrapper, ContentWrapper, Button } from './Tabs.styled';
import { tabs } from '../../data';

export const Tabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTab = tabs[activeIndex];

  const setActiveIdx = index => {
    if (activeIndex === index) {
      return;
    }
    setActiveIndex(index);
  };

  return (
    <>
      <ButtonWrapper>
        {tabs.map(({ label }, index) => (
          <Button
            key={label}
            onClick={() => setActiveIdx(index)}
            show={activeTab.label === label ? 'red' : 'black'}
            type="button"
          >
            {label}
          </Button>
        ))}
      </ButtonWrapper>
      <ContentWrapper>
        <h2>{activeTab.label}</h2>
        <p>{activeTab.content}</p>
      </ContentWrapper>
    </>
  );
};
