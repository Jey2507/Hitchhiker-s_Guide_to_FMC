import { lazy } from "react";
import { Routes, Route} from 'react-router-dom';

const Layout = lazy(() => import("./components/Layout/Layout"))
const HomePage = lazy(() => import("./pages/HomePage/HomePage"))
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"))
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"))

import './App.css';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}