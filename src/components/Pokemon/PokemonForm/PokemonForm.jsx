import { useState } from 'react';
import { toast } from 'react-toastify';
import { Form, Input, Button, IconSearch } from './PokemonForm.styled';

export const PokemonForm = ({ onHandleFormSubmit }) => {
  const [pokeName, setPokeName] = useState('');

  const handleNameChange = e => {
    setPokeName(e.target.value.toLowerCase());
  };

  const handleSubmitForm = e => {
    e.preventDefault();

    if (pokeName.trim() === '') {
      toast.warn('Enter a pokemon name!', {});
      return;
    }

    onHandleFormSubmit(pokeName);
    setPokeName('');
  };

  return (
    <Form onSubmit={handleSubmitForm}>
      <Input type="text" name="pokeName" value={pokeName} onChange={handleNameChange} />
      <Button type="submit">
        <IconSearch />
      </Button>
    </Form>
  );
};
