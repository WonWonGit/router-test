import useRouteComponent from "./RouteComponent";
import { createElement } from "react";
import {Route, Routes} from "react-router-dom"

const PageRoute = ({path}) => {
    const {component} = useRouteComponent(path);

    return (
        <Routes>
        <Route path={path} element={component ? createElement(component) : null}>
        </Route>
        </Routes>
    );
  };

export default PageRoute;
