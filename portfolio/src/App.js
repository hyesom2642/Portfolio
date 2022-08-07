// > css 
import './App.css';

// > components
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import EctButton from './components/EctButton';
import Loading from './components/Loading/Loading';

// > mediaquery
import { ThemeProvider } from "styled-components";
import theme from './style/theme';

// > 
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    setLoading(false);
  }, [])

  return (
    <>
    {
      loading === true
      ? <Loading />
      : <ThemeProvider theme={theme}>
          <Header />
          <Home />
          <About />
          <Project />
          <EctButton />
        </ThemeProvider>
    }
    </>
  )
}
export default App;