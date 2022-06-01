// > css 
import './App.css';

// > components
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import EctButton from './components/EctButton';
// import Responsive from './responsive/Responsive';

// > mediaquery
import { useMediaQuery } from 'react-responsive';
import MobileHome from './responsive/Mobile/MobileHome';
import MobileHeader from './responsive/Mobile/MobileHeader';

function App() {
  return (
    <>
      <Desktop>
        <Header />
        <EctButton />
        <Home />
        <About />
        <Project />
      </Desktop>
      <Mobile>
        <MobileHeader />
        <MobileHome />
      </Mobile>
    </>
  );
}

export default App;

const Desktop = ({children}) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}

const Mobile = ({children}) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}