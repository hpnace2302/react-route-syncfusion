import { Routes, Route, Outlet } from "react-router-dom";
import LayoutComponent from "../components/layout"
import { PATHS, ROLES } from "../constants";
import AllData from "../pages/Overview/AllData"
import Category2 from "../pages/Overview/Category2"
import AddName from "../pages/Notification/AddName"
import ChangeProfile from "../pages/Notification/ChangeProfile"
import Home from "../pages/Home"
import PrivateRoute from "./PrivateRoute"
import Error403 from "../pages/403";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutComponent />}>
        <Route path="*" element={<Error403 />} />
        <Route path={PATHS.home} element={<Home />} />
        <Route path={PATHS.overview}
          element={<PrivateRoute roles={[ROLES.admin, ROLES.user]}><Outlet /></PrivateRoute>}
        >
          <Route
            path={PATHS.allData}
            element={<PrivateRoute roles={[ROLES.admin]}>
              <AllData />
            </PrivateRoute>}
          />
          <Route
            path={PATHS.category2}
            element={<PrivateRoute roles={[ROLES.admin]}>
              <>
                <Category2 />
                <Outlet />
              </>
            </PrivateRoute>}
          >
            <Route path={PATHS.product} element={<PrivateRoute roles={[ROLES.admin]}><>product1</></PrivateRoute>} />
          </Route>
        </Route>
        <Route path={PATHS.notifications}
          element={<PrivateRoute roles={[ROLES.admin, ROLES.user]}><Outlet /></PrivateRoute>}
        >
          <Route
            path={PATHS.addName}
            element={<PrivateRoute roles={[ROLES.user]}>
              <AddName />
            </PrivateRoute>}
          />
          <Route
            path={PATHS.changeProfile}
            element={<PrivateRoute roles={[ROLES.admin, ROLES.user]}>
              <>
                <ChangeProfile />
                <Outlet />
              </>
            </PrivateRoute>}
          >
            <Route path={PATHS.name} element={<PrivateRoute roles={[ROLES.user]}><>name</></PrivateRoute>} />
          </Route>
        </Route>
      </Route>
    </Routes >
  )
}

export default Router