import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup";
import { useState } from "react";
import Response from "./components/ResponsePage/Response";
import EmailList from "./components/EmailList";
import { Route, Routes } from "react-router-dom";
function App() {
  const [showLoginModel, setLoginModel] = useState(false);
  return (
    <div>
      <Navbar changeModel={setLoginModel}></Navbar>
      {/* <EmailList></EmailList> */}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header></Header>
              {showLoginModel && (
                <LoginPopup changeModel={setLoginModel}></LoginPopup>
              )}
            </>
          }
        ></Route>

        <Route
          exact
          path="/generate-reply"
          element={<Response></Response>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
