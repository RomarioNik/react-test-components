import MockApiListItem from '../MockApiListItem';

const MockApiList = ({ materials, onUpdate, onDelete, error }) => {
  return (
    <ul>
      {materials.map(material => (
        <li key={material.id}>
          <MockApiListItem
            material={material}
            onUpdate={onUpdate}
            onDelete={onDelete}
            error={error}
          />
        </li>
      ))}
    </ul>
  );
};

export default MockApiList;
