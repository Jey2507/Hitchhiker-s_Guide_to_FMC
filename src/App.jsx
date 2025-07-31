import { lazy } from "react";
import { Routes, Route} from 'react-router-dom';

// const Layout = lazy(() => import("./components/Layout/Layout"))
const HomePage = lazy(() => import("./pages/HomePage/HomePage"))
const TeoriPage = lazy(() => import("./pages/TeoriPage/TeoriPage"))
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"))
const BlockPage = lazy(() => import("./pages/BlockPage/BlockPage"))
const DominoPage = lazy(() => import("./pages/DominoPage/DominoPage"))

import './App.css';

export default function App() {
  return (
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/info' element={<TeoriPage />} />
        <Route path='/block' element={<BlockPage />} />
        <Route path='/domino' element={<DominoPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
  );
}