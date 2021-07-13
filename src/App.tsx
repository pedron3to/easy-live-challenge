import { Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import { Layout } from './components/Layout';
import history from './history.js';
import GlobalStyle from './styles/global';
import { theme } from './styles/theme';

export const Container = styled.div`
  width: 100%;
  max-width: 1212px;
  margin: 0 auto;
  padding: 0 1rem;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Container>
          <Layout />
          <GlobalStyle />
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
