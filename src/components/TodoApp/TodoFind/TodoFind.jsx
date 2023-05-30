import { FormFind, InputFind, ButtonFind } from './TodoFind.styled';
import { ReactComponent as IconFind } from '../../../icons/find.svg';

const TodoFind = ({ filter, onFilter }) => {
  return (
    <FormFind>
      <InputFind value={filter} onChange={onFilter} type="text" placeholder="Search todo..." />
      <ButtonFind>
        <IconFind />
      </ButtonFind>
    </FormFind>
  );
};

export default TodoFind;
