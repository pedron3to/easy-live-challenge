import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './history';
import GlobalStyle from './styles/global';

import { AuthProvider } from './Context/AuthContext';
import { Layout } from './components/Layout';

function App() {
  return (

    <AuthProvider>
      <Layout>

        <Router history={history}>
          <Routes />
        </Router>

      </Layout>
      <GlobalStyle />
    </AuthProvider>
  );
}

export default App;
