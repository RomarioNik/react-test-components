import { useRef, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const ExamleNavDetails = () => {
  const { dogId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/examlenav');

  return (
    <div>
      <Link to={backLinkLocationRef.current}>-- Back link</Link>
      <h2>ExamleNavDetails {dogId}</h2>
      <ul>
        <li>
          <Link to="subbreeds">Subbreeds</Link>
        </li>
        <li>
          <Link to="gallery">Gallery</Link>
        </li>
      </ul>
      <Suspense fallback={<div>LOADING SUB...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default ExamleNavDetails;
