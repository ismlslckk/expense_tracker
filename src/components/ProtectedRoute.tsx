import {
  Navigate,
  Outlet,
} from 'react-router-dom';

const ProtectedRoute = ({ redirectPath = '/login', children = null }) => {
  const token = localStorage.getItem("token");
  if (!token)
    return <Navigate to={redirectPath} replace />;

  return children ? children : <Outlet />;
};


export default ProtectedRoute;