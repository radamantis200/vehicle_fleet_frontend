import { createBrowserRouter } from 'react-router-dom'
import Home from '@/views/Home'
import AuthLayout from '@/layout/AuthLayout'
import Register from '@/views/Register'
import Login from '@/views/Login'
import NotFound from '@/views/NotFound'


const router = createBrowserRouter([
    {
        path: '/',
        element: (<Home></Home>)
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