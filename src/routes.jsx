import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Story from "./components/pages/Story";
import State1 from "./components/States/State1";
import License from "./components/pages/License";
import StatePage from "./components/StatePage";

import Error from "./components/pages/Error";
import License from "./components/pages/License";

const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/license', element: <License /> },
  { path: '/contact', element: <Contact /> },
  { path: '/License', element: <License /> },
  { path: '/story', element: <Story /> },
  { path: '/state1', element: <State1 /> },
  { path: '/stage/:stageNumber', element: <StatePage /> },
  { path: '/*', element: <Error /> },
];

export default routes;