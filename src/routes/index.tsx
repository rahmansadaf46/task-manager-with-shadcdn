import App from "@/App";
import Tasks from "@/pages/Tasks";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router";


const router = createBrowserRouter([
    {
        path: "/",
        // element: <App />, // Ensure App is imported correctly
        Component: App,
        children: [
            {
                index: true,
                element: <User />,
            },
            {
                path: "users",
                element: <User />,
            },
            {
                path: "tasks",
                element: <Tasks />,
            },
        ],
    },
]);

export default router;