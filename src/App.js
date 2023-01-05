import { Route, Routes } from "react-router-dom";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
