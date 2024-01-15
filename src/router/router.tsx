import { createBrowserRouter, Navigate } from 'react-router-dom'
import Layout from '@/layout/Layout'
import Register from '@/views/Register'
import Login from '@/views/Login'
import AuthLayout from '@/layout/AuthLayout'
import Home from '@/views/Home'
import Branch from '@/views/Branch'
import User from '@/views/User'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Navigate to="/personas" replace />,
            },
            {
                path: 'personas',
                element: <Home />,
            },
            {
                path: 'sucursales',
                element: <Branch />,
            },
            {
                path: 'usuarios',
                element: <User />,
            },
        ],
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: '/auth/login',
                element: <Login />,
            },
            {
                path: '/auth/register',
                element: <Register />,
            },
        ],
    },
]);

export default router;
