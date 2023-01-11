import { ReactNode } from 'react';
import { WrapperList } from './WrapperList';

type ListProps = {
  children: ReactNode;
};

const List = ({ children }: ListProps) => {
  return <WrapperList>{children}</WrapperList>;
};

export default List;
