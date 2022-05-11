import { useState } from "react"
import { ROLES } from "../constants"

const useAuth = () => {
  const [userRole, setUserRole] = useState(ROLES.admin)

  return {userRole, setUserRole}
}

export default useAuth
