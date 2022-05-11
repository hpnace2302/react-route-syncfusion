import { FC, ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { PATHS, ROLES } from "../constants";
import useAuth from "./useAuth";

type PrivateRouteProps = {
  children: ReactElement,
  roles?: Array<string>,
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children, roles }) => {
  const { userRole } = useAuth()

  const availableRoles = roles || Object.keys(ROLES)
  
  const userHasRequiredRole = availableRoles.includes(userRole)

  if (!userRole || !userHasRequiredRole) {
    
    return <Navigate to={PATHS.home} />

  }

  return children
}

export default PrivateRoute
