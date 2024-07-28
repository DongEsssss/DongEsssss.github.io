import { Outlet } from "react-router-dom";
import { Header } from "./frame/Header";
import { Footer } from "./frame/Footer";
import '../global/main.scss'

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
