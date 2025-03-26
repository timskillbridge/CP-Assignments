
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from "./Pages/HomePage"
import AboutPage from "./Pages/AboutPage"
import NotFoundPage from "./Pages/NotFoundPage"
import ErrorPage from "./Pages/ErrorPage"

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                
                index: true,
                element: <HomePage />,
            },
            {
                path:'/AboutPage/',
                element: <AboutPage />,
            },
            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
        errorElement: <ErrorPage />,
    },
]);

export default router