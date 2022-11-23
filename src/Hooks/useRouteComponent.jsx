import { useState, useEffect } from "react";

const pageImport = (path) => import(`../pages${path}`);

const useRouteComponent = (path) => {
    const [component, setComponent] = useState(null);

    useEffect(() => {
        const importModule = async () => {
            const page = await pageImport(path).then((page) => page.default);
            console.log(await pageImport(path), page);
            setComponent(()=>page);
        };
        
        importModule();
      }, [path]);
    
      return {
        component
      };
}

export default useRouteComponent;