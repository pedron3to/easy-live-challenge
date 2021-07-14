import { BrowserRouter } from 'react-router-dom';

import Routes from '../../routes';
import { Footer } from '../Footer';
import { Header } from '../Header';

export function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}
