import { BrowserRouter } from 'react-router-dom';

import Routes from '../../routes.js';
import { Header } from '../Header';

export function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}
