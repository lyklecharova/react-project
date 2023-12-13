import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/authContext";
import { Path } from "./paths";

import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Dashboard } from './components/Dashboard/Dashboard';
import { CreateRecipe } from "./components/CreateRecipe/CreateRecipe";
import { DetailsRecipes } from "./components/DetailsRecipes/DetailsRecipes";
import { EditRecipe } from "./components/EditRecipe/EditRecipe";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
import { Footer } from './components/Footer/Footer';

import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Logout } from "./components/Logout/Logout";
import AuthGuard from "./components/guards/AuthGuard";
function App() {
  return (
    
    <AuthProvider>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/recipes/:recipeId" element={<DetailsRecipes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<PageNotFound />} />

          <Route element={<AuthGuard />}>
            <Route path="/recipes/create" element={<CreateRecipe />} />
            <Route path='/recipes/:recipeId/edit' element={<EditRecipe />} />
            <Route path='/logout' element={<Logout />} />
          </Route>

        </Routes>
      </main>
      <Footer />
    </AuthProvider>
  

  )
}
export default App
