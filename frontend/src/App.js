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
import UserDashboard from "./components/Dashboard/UserDashboard";
import ResumeEdit from "./components/Resume/ResumeEdit";
import ChooseTemplate from "./components/Templates/ChooseTemplate";
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
        <Route exact path="/resume-full-screen" element={<EmailList></EmailList>}></Route>

        <Route
          exact
          path="/create-resume"
          element={<Response></Response>}
        ></Route>

        <Route
          exact
          path="/dashboard"
          element={<UserDashboard></UserDashboard>}
        ></Route>

        <Route
          exact
          path="/resume/:resumeId/template/:templateId/edit"
          element={<ResumeEdit></ResumeEdit>}
        ></Route>

        <Route exact path="/resume/template/:resumeId" element={<ChooseTemplate></ChooseTemplate>}></Route>
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
