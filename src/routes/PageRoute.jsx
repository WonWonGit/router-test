import useRouteComponent from "../Hooks/useRouteComponent";
import { createElement } from "react";
import {Route, Routes} from "react-router-dom"

const PageRoute = ({path}) => {
    const {component} = useRouteComponent(path);

    return (
        <Routes>
          {
            component === undefined ? 
            <Route path={path} element={<div>404</div>}></Route> 
            :
            <Route path={path} element={component ? createElement(component) : null}></Route>
          }
        </Routes>
    );
  };

export default PageRoute;
