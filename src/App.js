import './App.css';
import Navbar from './screens/Navbar/Navbar';
import BACKGROUND from './assets/compressedbg.png'

function App() {
  return (
    <>
      <Navbar />
      <div id="imgFirstPage">
        <div id="hovering-text">
          <div id="heading1"><h1>WELCOME TO</h1></div>
          <div id="heading2"><h1>RECTR.IN</h1></div>
        </div>
        <div style={{ paddingTop: 160 }}>
          <img src={BACKGROUND} alt="background" height="auto" width="100%" />
        </div>
      </div>
    </>
  );
}

export default App;
