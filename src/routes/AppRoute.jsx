import PAGE_LIST from "./routes";
import {matchPath} from 'react-router';
import PageRoute from "./PageRoute";
import { Fragment } from "react";


const AppRoute = () =>{
    const pathname = window.location.pathname;
    const exist = PAGE_LIST.filter(({path}) => path === pathname);

    return (
        <>
        {exist.length !== 0?
         PAGE_LIST.map(({path}, index) => {     
            const match = matchPath(path, pathname);
            const isActive = match ? true : false;
            return isActive ? 
            <PageRoute path={path} key={index}/> : <Fragment key={index} ></Fragment>;
        })
        :
        <div>404</div>
    }
      </>
      );
}

export default AppRoute;