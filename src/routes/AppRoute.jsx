import PAGE_LIST from "./routes";
import {matchPath} from 'react-router';
import PageRoute from "./PageRoute";
import { Fragment, useCallback } from "react";


const AppRoute = () =>{

    const pathname = window.location.pathname;

    const exist = useCallback((pathname)=>{
        return PAGE_LIST.filter(({path}) => matchPath(path, pathname));
    }, []);

    const isExist = exist(pathname);


    return (
        <>
        {
            
            PAGE_LIST.map(({path}, index) => {  
                const match = matchPath(path, pathname);
                const isActive = match ? true : false;
                return isActive ? 
                <PageRoute path={path} key={index}/>
                : 
                <Fragment key={index}></Fragment>
            })
        }
        {
            isExist.length === 0 ?
            <PageRoute path={pathname} /> :
            <></>
        }
      </>
      );
}

export default AppRoute;