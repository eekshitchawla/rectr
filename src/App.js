import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Navbar from './screens/Navbar/Navbar';
import SignUp from './screens/SignUp/SignUp';
import SignIn from './screens/SignIn/SignIn';
import Acknowledge from './screens/Acknowledge/Acknowledge';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyAQY7lptTGVNeTOPcSDTssM0IriyI07MW0",
    authDomain: "rectr-app.firebaseapp.com",
    databaseURL: "https://rectr-app-default-rtdb.firebaseio.com",
    projectId: "rectr-app",
    storageBucket: "rectr-app.appspot.com",
    messagingSenderId: "317413265184",
    appId: "1:317413265184:web:a2361a5e1fa9956d3cd145",
    measurementId: "G-NKNPP2Q0WY"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  console.log(analytics)
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/ack" element={<Acknowledge />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
