import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Cv from './pages/cv';
import Diplomes from './pages/diplomes';
import Error from './pages/error';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/diplomes" element={<Diplomes />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </HashRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
