import "./App.css";
import Home from "./Pages/Home";
import ToDoList from "./Pages/ToDoList";
import PredictAgeApiCall from "./Pages/PredictAgeApiCall";
import CatFactAPICall from "./Pages/CatFactAPICall";
import Person from "./Pages/Person";
import GasPlanet from "./Pages/GasPlanet";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import NavBar from "./Pages/NavBar";
import Profile from "./Pages/StateManagement/Profile";
import { createContext, useState } from "react";

export const UserContext = createContext();
function App() {
  const [userName, setUserName] = useState("Satish");

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todolist" element={<ToDoList />} />
            <Route path="/predictage" element={<PredictAgeApiCall />} />
            <Route path="/catfact" element={<CatFactAPICall />} />
            <Route path="/person" element={<Person />} />
            <Route path="/gasplanet" element={<GasPlanet />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
