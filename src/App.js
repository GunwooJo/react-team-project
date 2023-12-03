import React from "react";

import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from "./pages/MainPage";
import RecipeListPage from "./pages/RecipeListPage";
function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/recipe/list' element={<RecipeListPage/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}