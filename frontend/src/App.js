import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup";
import { useState } from "react";
import Response from "./components/ResponsePage/Response";

function App() {
  const [showLoginModel, setLoginModel] = useState(false);
  return (
    <div>
      <Navbar changeModel={setLoginModel}></Navbar>
      <Header></Header>
      {showLoginModel && <LoginPopup changeModel={setLoginModel}></LoginPopup>}
      <Response></Response>
      <Footer></Footer>
    </div>
  );
}

export default App;
