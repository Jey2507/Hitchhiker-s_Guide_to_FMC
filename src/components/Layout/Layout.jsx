import { Suspense } from "react";

import Loader from "../Loader/Loader";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loader />}>
        {children}
      </Suspense>
      <Footer/>
    </div>
  );
}
