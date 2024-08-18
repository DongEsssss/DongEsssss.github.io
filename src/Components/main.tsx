import '../global/main.scss'
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

// web-frame
import Pageupbtn from "../frame/pageupbutton/pageupbtn";
import CustomCursor from "../frame/customcursor";

function Main() {
  document.title = useTranslation().t("title")
  return (
    <main>
      <Outlet />
      {/* frame */}
      <CustomCursor />
      <Pageupbtn />
    </main>
  );
}

export default Main;
