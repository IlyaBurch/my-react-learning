import { AboutPage } from "@/pages/AboutPage";
import { MainPage } from "@/pages/MainPage";
import { routeConfig } from "@/shared/config/routeConfig/routeConfig";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return ( 
      <Routes>
        {Object.values(routeConfig).map(({element, path}) => (
          <Route
            key={path}
            path={path}
            element={(
              <Suspense fallback={<div>Loading...</div>}>
                {element}
              </Suspense>
            )}
          />
        ))}
      </Routes>
   );
}
 
export { AppRouter };