import React from "react";

import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from "./pages/MainPage";
import RecipeListPage from "./pages/RecipeListPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import AddRecipe from "./components/AddRecipe";

function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/recipe/list' element={<RecipeListPage/>}/>
          <Route path='/recipe/:RCP_NM' element={<RecipeDetailPage/>}/>
          <Route path='/recipe/addUserRecipe' element={<AddRecipe/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;