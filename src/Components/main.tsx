import { Outlet } from "react-router-dom";
import { Header } from "./frame/Header";
import { Footer } from "./frame/Footer";

function Main() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Main;
