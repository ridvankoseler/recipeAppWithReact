
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from './router/AppRouter';
import { ThemeProvider } from 'styled-components';
import theme from "./globalStyles/theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter/>
      {/* burada appRouter ı çağırmamız gerekiyor */}
    </ThemeProvider>
  );
}

export default App;
