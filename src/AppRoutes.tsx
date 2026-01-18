// import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import TopPage from "./pages/TopPage"
import GuidePage from "./pages/GuidePage"
import MapPage from "./pages/MapPage"
import AboutPage from "./pages/AboutPage"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/guide" element={<GuidePage />}/>
        <Route path="/map" element={<MapPage />}/>
        <Route path="/about" element={<AboutPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
