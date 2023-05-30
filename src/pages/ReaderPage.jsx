import { Reader } from '../components/Reader';
import { publications } from '../data';

export const ReaderPage = () => {
  return <Reader items={publications} />;
};
