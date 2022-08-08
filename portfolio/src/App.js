// > css 
import './App.css';

// > components 
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import EctButton from './components/EctButton';
import Loading from './components/Loading/Loading';

// > theme 
import { ThemeProvider } from "styled-components";
import theme from './theme/theme';

// > 
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  }

  useEffect( () => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth);
    setLoading(false);

    return () => {
      window.removeEventListener('resize', changeWidth);
    }
  }, [])

  return (
    <>
    {
      loading === true
      ? <Loading />
      : <ThemeProvider theme={theme}>
          <Navbar toggleMenu={toggleMenu} screenWidth={screenWidth} toggleNav={toggleNav} />
          {
            toggleMenu === false
            ? <>
              <Home />
              <About />
              <Project />
              <EctButton />
            </>
            : null
          }
        </ThemeProvider>
    }
    </>
  )
}
export default App;