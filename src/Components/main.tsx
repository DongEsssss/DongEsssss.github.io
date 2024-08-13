import { Outlet } from "react-router-dom";
import { Header } from "./frame/Header";
import { Footer } from "./frame/Footer";
import '../global/main.scss'
import { useTranslation } from "react-i18next";
import Pageupbtn from "../frame/pageupbutton/pageupbtn";

function Main() {
  document.title = useTranslation().t("title")
  return (
    <>
      <Header />
      <Pageupbtn />
      <Outlet />
      <Footer />
    </>
  );
}

export default Main;
