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
import Form from "../pages/Form"

const Router = () => {
  return (
    <Routes>
      <Route element={<LayoutComponent />}>
        <Route path="*" element={<Error403 />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path={PATHS.overview} element={<PrivateRoute roles={[ROLES.admin, ROLES.user]}><Outlet /></PrivateRoute>}>
          <Route path={PATHS.allData} element={
            <PrivateRoute roles={[ROLES.admin]}>
              <AllData />
            </PrivateRoute>}
          />
          <Route path={PATHS.category2} element={<PrivateRoute roles={[ROLES.admin]}>
            <>
              <Category2 />
              <Outlet />
            </>
          </PrivateRoute>}>
            <Route path={PATHS.product} element={<PrivateRoute roles={[ROLES.admin]}><>product1</></PrivateRoute>} />
          </Route>
        </Route>
        <Route path={PATHS.notifications} element={<PrivateRoute roles={[ROLES.admin, ROLES.user]}><Outlet /></PrivateRoute>}>
          <Route path={PATHS.addName} element={<PrivateRoute roles={[ROLES.user]}>
            <AddName />
          </PrivateRoute>} />
          <Route path={PATHS.changeProfile} element={<PrivateRoute roles={[ROLES.admin, ROLES.user]}>
            <>
              <ChangeProfile />
              <Outlet />
            </>
          </PrivateRoute>}>
            <Route path={PATHS.name} element={<PrivateRoute roles={[ROLES.user]}><>name</></PrivateRoute>} />
          </Route>
        </Route>
        <Route path={PATHS.form} element={<PrivateRoute roles={[ROLES.admin, ROLES.user]}><Form /></PrivateRoute>} />
      </Route>
    </Routes >
  )
}

export default Router