import { Routes, Route } from "react-router-dom";
import { AppHeader } from '../cmps/app-header'
import { Biography } from '../cmps/biography'
import { VideosWatcher } from '../cmps/videos-watcher'
import { routes } from '../routes';
import { SimpleSlider } from '../cmps/slider'


export function MainPage() {
    return <div>
        <div className="main-view-container">
            <AppHeader />
            <Biography />
            <SimpleSlider>
                <VideosWatcher />
            </SimpleSlider>
            {/* <Routes> */}
            {/* {routes.map(route => <Route key={route.path} element={route.element} path={route.path} />)} */}
            {/* </Routes> */}
        </div>

    </div>
}