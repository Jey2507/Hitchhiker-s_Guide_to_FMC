import { Routes, Route } from "react-router-dom";
import { AppShell } from "./components/layout/AppShell.jsx";
import HomePage from "./pages/HomePage.jsx";
import BlockbuildingPage from "./pages/BlockbuildingPage.jsx";
import DominoPage from "./pages/DominoPage.jsx";
import BonusPage from "./pages/BonusPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/blockbuilding" element={<BlockbuildingPage />} />
        <Route path="/domino" element={<DominoPage />} />
        <Route path="/bonus" element={<BonusPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
