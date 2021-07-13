import { BrowserRouter } from 'react-router-dom';

import Routes from '../../routes';
import { Header } from '../Header';

export function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}
