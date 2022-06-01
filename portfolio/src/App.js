// > css 
import './App.css';

// > components
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import EctButton from './components/EctButton';


function App() {
  return (
    <>
      <Header />
      <EctButton />
      <Home />
      <About />
      <Project />
    </>
  );
}

export default App;
