import { useState, useEffect } from "react";

const pageImport = (path) => import(`../pages${path}`);

const useRouteComponent = (path) => {
    const [component, setComponent] = useState(null);

    useEffect(() => {
        const importModule = async () => {
            const {default: Page} = await pageImport(path);
            setComponent(() => Page);
        };
        importModule();
      }, [path]);
    
      return {
        component
      };
}

export default useRouteComponent;