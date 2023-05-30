import { useParams } from 'react-router-dom';

export const Gallery = () => {
  const { dogId } = useParams();

  return <div>Gallery {dogId}</div>;
};
