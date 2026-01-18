import { HashRouter, Route, Routes } from "react-router-dom"
import TopPage from "./pages/TopPage"
import GuidePage from "./pages/GuidePage"
import MapPage from "./pages/MapPage"
import AboutPage from "./pages/AboutPage"

const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </HashRouter>
  )
}

export default AppRoutes
