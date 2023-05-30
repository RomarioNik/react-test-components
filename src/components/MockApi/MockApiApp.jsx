import { useState, useEffect } from 'react';
import { addMaterial, getMaterials, deleteMaterial, updateMaterial } from '../../services';
import MockApiForm from './MockApiForm/MockApiForm';
import MockApiList from './MockApiList';
import { Wrapper } from './MockApiApp.styled';

const MockApiApp = () => {
  const [materials, setMaterials] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBaseList = async () => {
      try {
        setIsLoading(true);
        const materials = await getMaterials();
        setMaterials(materials);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getBaseList();
  }, []);

  const addNewMaterial = async values => {
    try {
      const material = await addMaterial(values);
      setMaterials(prev => [...prev, material]);
    } catch (error) {
      setError(error.message);
    }
  };

  const delMaterial = async id => {
    try {
      const material = await deleteMaterial(id);
      setMaterials(prev => prev.filter(el => el.id !== material.id));
    } catch (error) {
      setError(error.message);
    }
  };

  const upMaterial = async fields => {
    try {
      const material = await updateMaterial(fields);
      setMaterials(prev => prev.map(el => (el.id === fields.id ? material : el)));
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Wrapper>
      <MockApiForm onSubmit={addNewMaterial} />
      {error && <div>{error}</div>}
      {isLoading ? (
        <div>LOADING</div>
      ) : (
        <MockApiList
          materials={materials}
          onDelete={delMaterial}
          onUpdate={upMaterial}
          error={error}
        />
      )}
    </Wrapper>
  );
};

export default MockApiApp;
