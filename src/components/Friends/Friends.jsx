import { useState, useMemo } from 'react';
import { Wrapper, List } from './Friends.styled';
import { initialFriends } from '../../data';

export const Friends = () => {
  const [count, setCount] = useState(0);
  const [friends] = useState(initialFriends);
  const [filter, setFilter] = useState('');

  const visibleFriends = useMemo(
    () => friends.filter(friend => friend.toLowerCase().includes(filter)),
    [filter, friends]
  );

  return (
    <Wrapper>
      <button type="button" onClick={() => setCount(c => c + 1)}>
        {count}
      </button>
      <input onChange={e => setFilter(e.target.value)} type="text" name="text" value={filter} />
      <List>
        {visibleFriends.map((friend, idx) => (
          <li key={idx}>{friend}</li>
        ))}
      </List>
    </Wrapper>
  );
};
