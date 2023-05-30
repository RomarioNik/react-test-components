import { List, ListItem } from './VideoList.styled';

export const VideoList = ({ videos, onSelect }) => {
  return (
    <List>
      {videos.map(({ id, link }) => (
        <ListItem key={id} onClick={() => onSelect(link)}>
          {link}
        </ListItem>
      ))}
    </List>
  );
};
