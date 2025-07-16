import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import MainLayout from "./layouts/MainLayout";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>

          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />


          </Route>
          <Route element={<AdminLayout/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
          </Route>

         

        </Route>
      </Routes>
    </Router>
  );
}

export default App;