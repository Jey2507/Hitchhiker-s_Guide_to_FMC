import { Suspense } from "react";

import Loader from "../Loader/Loader";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>
        {children}
      </Suspense>
      <Footer/>
    </div>
  );
}
