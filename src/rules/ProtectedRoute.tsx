// ProtectedRoute.js
import { Navigate } from 'react-router-dom';

import { ReactElement } from 'react';

interface ProtectedRouteProps {
    element: ReactElement;
    isAuthenticated: boolean;
}

const ProtectedRoute = ({ element, isAuthenticated }: ProtectedRouteProps) => {
    return isAuthenticated ? element : <Navigate to="/login" replace={true} />;
};

export default ProtectedRoute;
