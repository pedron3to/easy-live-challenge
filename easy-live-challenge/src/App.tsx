import { Router } from 'react-router-dom';

import { Layout } from './components/Layout';
import history from './history.js';
import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Layout>
        <Router history={history}>
          <Routes />
        </Router>
      </Layout>
      <GlobalStyle />
    </>
  );
}

export default App;
