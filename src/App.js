import { StyledGlobal } from './StyledComponents/StyledGlobal';
import { ThemeProvider } from "styled-components";
import { useContext } from 'react';
import PortfolioContext from './context/PortfolioContext';
import Routes from './routes/Routes';


function App() {
  const { theme } = useContext(PortfolioContext);

  return (
      <ThemeProvider theme={theme}>
        <StyledGlobal />
        <Routes />
      </ThemeProvider>
  );
}

export default App;
