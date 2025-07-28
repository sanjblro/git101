import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Story from "./components/pages/Story";
import State1 from "./components/States/State1";
import License from "./components/pages/License";
import StatePage from "./components/StatePage";
import Name from "./components/pages/Name";
import Hello from "./components/pages/Hello";

import Error from "./components/pages/Error";

const routes = [
  { path: '/', element: <Home /> },
  { path: '/name', element: <Name /> },
  { path: '/about', element: <About /> },
  { path: '/hello', element: <Hello /> },
  { path: '/license', element: <License /> },
  { path: '/contact', element: <Contact /> },
  { path: '/story', element: <Story /> },
  { path: '/state1', element: <State1 /> },
  { path: '/stage/:stageNumber', element: <StatePage /> },
  { path: '/*', element: <Error /> },
];

export default routes;