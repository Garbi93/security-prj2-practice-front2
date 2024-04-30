import {createBrowserRouter} from "react-router-dom";
import {lazy, Suspense} from "react";


const Loading = <div className={"bg-orange-700"}>Loading ....</div>

const Main = lazy(() => import("../pages/MainPage"));
const About = lazy(() => import("../pages/AboutPage"));


const root = createBrowserRouter([
  {
    path: "",
    element: <Suspense fallback={Loading}><Main/></Suspense>,
  },
  {
    path: "about",
    element: <Suspense fallback={Loading}><About/></Suspense>,
  }
]);

export default root;