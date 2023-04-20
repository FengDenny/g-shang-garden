import { useState } from "react";
import Navbar from "@/components/Navbar";
import AnimatedRight from "@/components/Navbar/AnimatedRight";
import { useRoutes } from "react-router-dom";
import Home from "@/pages/Home";
import Footer from "@/components/Footer";
import Gallery from "@/pages/Home/Gallery";
import Garden from "@/pages/Home/Garden";
function App() {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  const stickyFooterStyling = "flex h-screen flex-col justify-between";

  const Main = () => {
    let routes = useRoutes([
      { path: "/", element: <Home /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/fengshuigarden", element: <Garden /> },
      // { path: "/404", element: <NotFound /> },
      // { path: "*", element: <Navigate to="/404" replace /> },
    ]);

    return routes;
  };

  return (
    <div className={`${stickyFooterStyling} app `}>
      <Navbar isMenuToggled={isMenuToggled} setIsMenuToggled={setIsMenuToggled}>
        <AnimatedRight
          isMenuToggled={isMenuToggled}
          setIsMenuToggled={setIsMenuToggled}
        />
      </Navbar>
      <main className="grow">
        <Main />
      </main>
      <Footer />
    </div>
  );
}

export default App;
