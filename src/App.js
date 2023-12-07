import React from "react";

import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from "./pages/MainPage";
import RecipeListPage from "./pages/RecipeListPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import AddRecipe from "./components/AddRecipe";
import UserRecipeListPage from "./pages/UserRecipeListPage";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/recipe/list' element={<RecipeListPage />}/>
          <Route path='/recipe/:RCP_NM' element={<RecipeDetailPage/>}/>
          <Route path='/recipe/addUserRecipe' element={<AddRecipe/>}/>
          <Route path='/recipe/UserRecipeList' element={<UserRecipeListPage/>}/>
          <Route path='/user/register' element={<Register/>}/>
          <Route path='/user/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;