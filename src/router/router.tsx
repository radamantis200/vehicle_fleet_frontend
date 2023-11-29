import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/layout/Layout';
import Register from '@/views/Register'
import NotFound from '@/views/NotFound'
import Login from '@/views/Login'
import AuthLayout from '@/layout/AuthLayout'
import Home from '@/views/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Layout />
        ),
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home/>
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/register',
                element: <Register />
            }
        ]
    }
])

export default router