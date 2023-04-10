import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import AnimatedRight from "@/components/Navbar/AnimatedRight";
import { useRoutes, Navigate } from "react-router-dom";
import Home from "@/pages/Home";

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  const stickyFooterStyling = "flex h-screen flex-col justify-between";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY == 0) {
        setIsTopOfPage(true);
      }

      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Main = () => {
    let routes = useRoutes([
      { path: "/", element: <Home /> },
      // { path: "/404", element: <NotFound /> },
      // { path: "*", element: <Navigate to="/404" replace /> },
    ]);

    return routes;
  };

  return (
    <div className={`${stickyFooterStyling} app `}>
      <Navbar
        isTopOfPage={isTopOfPage}
        isMenuToggled={isMenuToggled}
        setIsMenuToggled={setIsMenuToggled}
      >
        <AnimatedRight
          isMenuToggled={isMenuToggled}
          setIsMenuToggled={setIsMenuToggled}
        />
      </Navbar>
      <main className="grow">
        <Main />
      </main>
    </div>
  );
}

export default App;
