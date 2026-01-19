import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { GameContainer } from './components/GameContainer/GameContainer';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <GameContainer />
    </ThemeProvider>
  );
}

export default App;
