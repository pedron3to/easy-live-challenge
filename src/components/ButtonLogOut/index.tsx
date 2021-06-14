import { useContext } from 'react';

import { Context } from '../../Context/AuthContext';
import { OutlinedButton } from './styles';

export function ButtonLogOut() {
  const { handleLogOut } = useContext(Context);
  return <OutlinedButton onClick={handleLogOut}>Sair</OutlinedButton>;
}
