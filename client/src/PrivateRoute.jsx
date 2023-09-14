import { Navigate, Route } from 'react-router';

export const PrivateRoute = ({ path, element: Element, isAuthenticated }) => {
  return isAuthenticated ? (
    <Route path={path} element={Element} />
  ) : (
    <Navigate to="/login" replace />
  );
};
