import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./Pages/HomePage";
import Characters from "./Pages/Characters"
import Character from './Pages/Character'




const router = createBrowserRouter([
    {
        // http://localhost:5173/
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: "/characters/",
                element: <Characters />
            },
            {
                path:"characters/:characterID",
                element: <Character/>
            }

        ],
        // errorElement: <NotFountPage />
    }
])

export default router;