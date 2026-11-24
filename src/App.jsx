import { useEffect } from "react";
import Floating from "./components/floating/floating.jsx";
import Header from "./components/Header/Header.jsx";
import Body from "./components/Body/Body.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  useEffect(() => {
    import("./script.js");
  }, []);

  return (
    <>
      <Floating />
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;
