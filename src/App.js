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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const UserContext = createContext();
function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  const [userName, setUserName] = useState("Satish");

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      <div className="App">
        <QueryClientProvider client={client}>
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
        </QueryClientProvider>
      </div>
    </UserContext.Provider>
  );
}

export default App;
