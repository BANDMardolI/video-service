import { createBrowserRouter } from "react-router-dom";
import FilmPage from "../pages/FilmPage";
import ChannelPage from "../pages/ChannelPage";


const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <FilmPage />
        },
        {
            path: '/Channels',
            element: <ChannelPage />
        },
    ]);

export default router;