import { useState } from "react";
import "./App.css";
// import Navbar from './components/Navbar'
// import InputFileUpload from './components/FileUpload'
// import RegistrationForm from './Page/SignUp'
// import EbookFormMui from './Page/Add-book page'
import Home from "./Page/Home";
import Join from "./Page/Join";
import Header from "./components/header/Header";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div>
      <Header className="font-bold w-full fixed top-0" />
      {/* <Join /> */}
      <Home />
    </div>
    <Footer />
    </>
  );
}

export default App;
