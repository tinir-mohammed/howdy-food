import Profile from "./views/dashboard/Profile";
import Menus from "./views/dashboard/Menus";
import Orders from "./views/dashboard/Orders";
import Ledger from "./views/dashboard/Ledger";
import Ratings from "./views/dashboard/Ratings";
import Dashboard from "./views/dashboard/Dashboard";
import Login from "./views/Login";
import Signup from "./views/Signup";
const dashboardRoutes = [
  {
    name: "Profile",
    path: "/dashboard/profile",
    component: Profile,
  },
  {
    name: "Menus",
    path: "/dashboard/menus",
    component: Menus,
  },
  {
    name: "Orders",
    path: "/dashboard/orders",
    component: Orders,
  },
  {
    name: "Ledger",
    path: "/dashboard/ledger",
    component: Ledger,
  },
  {
    name: "Ratings",
    path: "/dashboard/ratings",
    component: Ratings,
  },
];

const utilityRoutes = [
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Pricing", path: "/pricing" },
  { name: "Support", path: "/support" },
  {
    name: "Dashboard",
    path: "/dashboard/profile",
    component: Dashboard,
  },
  { name: "Login", path: "/login", component: Login },
  { name: "Signup", path: "/signup", component: Signup },
];

export { dashboardRoutes, utilityRoutes };
