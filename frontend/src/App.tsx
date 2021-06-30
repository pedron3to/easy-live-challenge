import { Router } from 'react-router-dom';

import { Layout } from './components/Layout';
import { AuthProvider } from './Context/AuthContext';
import history from './history.js';
import Routes from './routes';
import GlobalStyle from './styles/global';

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
