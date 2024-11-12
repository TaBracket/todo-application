import { useRoutes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import HomeLayout from "../../layouts/HomeLayout";

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);
  return routes;
};
export default AppRoutes;
