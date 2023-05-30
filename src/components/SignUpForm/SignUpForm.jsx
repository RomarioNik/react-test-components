import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Form, Input } from './SignUpForm.styled';

export const SignUpForm = () => {
  const [email, setEmail] = useLocalStorage('email', '');
  const [password, setPassword] = useLocalStorage('password', '');

  const handleChengeInput = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  return (
    <Form>
      <label htmlFor="email">Email</label>
      <Input type="email" name="email" id="email" value={email} onChange={handleChengeInput} />

      <label htmlFor="password">Password</label>
      <Input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={handleChengeInput}
      />
      <button type="submit">Submit</button>
    </Form>
  );
};
