import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    // <div className="App">
    //   <nav className="navbar">
    //     <div className="navbar-container">
    //       <img src={logo} alt="EmailAI Logo" className="navbar-logo" />
    //       <h1 className="navbar-title">Email-AI</h1>
    //       <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
    //         Toggle modal
    //       </button>

    //     </div>
    //   </nav>
    //   <header className="App-header">
    //     <h1>Your Communication, Optimized</h1>
    //     <p>
    //       Craft, personalize, and automate your email replies with our free
    //       AI-powered email response generator. Designed for professional
    //       correspondence, customer service, and everyday communication needs.
    //     </p>
    //     <button>Create a New Response</button>

    //     <h2>Customized Replies for Every Communication Need</h2>
    //     <p>
    //       Email Response AI is your ultimate tool for any email scenario.
    //       Whether it’s customer support, professional networking, or routine
    //       correspondence, our app tailors every response to your needs.
    //       Experience the convenience of:
    //     </p>
    //     <ul>
    //       <li>
    //         AI-Powered Response Optimization Utilize AI to craft the most
    //         effective replies. Our tool ensures clear, concise, and contextually
    //         appropriate responses.
    //       </li>
    //       <li>
    //         All-in-One Email Organizer Streamline your email management with our
    //         all-in-one platform. Email Response AI consolidates reply templates,
    //         response history, and communication tips. Manage all your email
    //         responses in one place.
    //       </li>
    //       <li>
    //         Collaborative Response Drafting Collaborate on crafting replies with
    //         team members. Our real-time feature makes group communication
    //         planning effortless, ensuring consistency and coherence.
    //       </li>
    //     </ul>
    //   </header>
    //   <footer>
    //     Email Response AI Transform your email communications with ease and
    //     efficiency using Email Response AI. Legal Terms and Conditions Privacy
    //     Policy Support Contact Us © 2024 Email Response AI. All rights reserved.
    //   </footer>
    // </div>
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
