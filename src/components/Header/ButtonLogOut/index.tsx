import { useContext } from 'react';

import { Context } from '../../../Context/AuthContext';
import { Button } from '../../shared/Button';

export function ButtonLogOut() {
  const { handleLogOut } = useContext(Context);

  return (
    <Button onClick={handleLogOut} variant="outlined">
      Sair
    </Button>
  );
}
