import { Footerlayout, HeaderLayout } from "../layouts";
import { Outlet } from "react-router";

const SharedRutes = () => {
  return (
    <div>
      <HeaderLayout />
      <Outlet />
      <Footerlayout />
    </div>
  );
};

export default SharedRutes;
