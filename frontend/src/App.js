import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./screens/LandingPage/LandingPage"
import LoginScreen from "./screens/LoginScreen/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import MyNotes from "./screens/MyNotes/MyNotes"
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main >
        <Routes>
          <Route path="/" element={<LandingPage />} exact/>
          <Route path="/mynotes" element={<MyNotes />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
        </Routes> 
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
