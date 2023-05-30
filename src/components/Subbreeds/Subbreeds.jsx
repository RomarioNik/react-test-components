import { useParams } from 'react-router-dom';

export const Subbreeds = () => {
  const { dogId } = useParams();

  return <div>Subbreeds {dogId}</div>;
};
