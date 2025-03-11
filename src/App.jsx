import { useState } from "react";
import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./pages/Home/HomePage"));
const Psychologists = lazy(() => import("./pages/Psychologists/Psychologists"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/psychologists" element={<Psychologists />} />
      </Routes>
    </div>
  );
}

export default App;
