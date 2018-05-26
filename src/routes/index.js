import HolidaysContainer from "../containers/HolidaysContainer";
import DashboardContainer from "../containers/DashboardContainer";
import NotFoundContainer from "../containers/NotFoundContainer";
import MainLayout from "../layouts/MainLayout";
import EmptyLayout from "../layouts/EmptyLayout";

const routes = [
  {
    path: "/holidays",
    exact: true,
    container: HolidaysContainer,
    layout: MainLayout
  },
  {
    path: "/",
    exact: true,
    container: DashboardContainer,
    layout: MainLayout
  },
  {
    path: "*",
    exact: false,
    container: NotFoundContainer,
    layout: EmptyLayout
  }
];
export default routes;
