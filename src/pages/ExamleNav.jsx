import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const ExamleNav = () => {
  const [dogs, setDogs] = useState(['1-dog', '2-dog', '3-dog', '4-dog', '5-dog']);
  const [searchParams, setSearchParams] = useSearchParams();
  const nameParam = searchParams.get('name') ?? '';

  const location = useLocation();

  const visibleParam = dogs.filter(dog => dog.includes(nameParam));

  // useEffect(() => {
  //   console.log(nameParam);
  // }, [nameParam]);

  const updateQueryString = e => {
    const nextParam = e.target.value !== '' ? { name: e.target.value } : {};
    setSearchParams(nextParam);
  };

  return (
    <>
      <input type="text" value={nameParam} onChange={updateQueryString} />
      <button
        type="button"
        onClick={() => {
          setSearchParams({ name: '5' });
        }}
      >
        Change Search Params
      </button>
      <ul>
        {visibleParam.map(el => (
          <li key={el}>
            <Link to={`${el}`} state={{ from: location }}>
              {el}
            </Link>
          </li>
        ))}
      </ul>
      {/* <h3>SearchParams: {nameParam}</h3> */}
    </>
  );
};

export default ExamleNav;
