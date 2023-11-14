import { Routes, Route } from "react-router-dom";

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { Home } from './components/Home/Home';
import { Dashboard } from './components/Dashboard/Dashboard';
import {ProfileDetails} from './components/ProfileDetails/ProfileDetails';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/*" element={<Dashboard  />} />
          <Route path="/profile" element={<ProfileDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>
      </main>

      <Footer />
    </>
  )
}
export default App
