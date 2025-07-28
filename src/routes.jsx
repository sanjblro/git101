import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Story from "./components/pages/Story";
import License from "./components/pages/License";
import StatePage from "./components/StatePage";
import Name from "./components/pages/Name";
import Hello from "./components/pages/Hello";

//dark
import Homedard from "./components/darkpages/Homedard";
import Aboutdark from "./components/darkpages/Aboutdark";
import Contactdark from "./components/darkpages/Contactdark";
import Licensedark from "./components/darkpages/Licensedark";
import Namedark from "./components/darkpages/Namedark";
import Hellodark from "./components/darkpages/Hellodark";
import Storydark from "./components/darkpages/Storydark";
import Statepagedark from "./components/States/Statepagedark";

import Error from "./components/pages/Error";

const routes = [
  { path: '/', element: <Home /> },
  { path: '/name', element: <Name /> },
  { path: '/about', element: <About /> },
  { path: '/hello', element: <Hello /> },
  { path: '/license', element: <License /> },
  { path: '/contact', element: <Contact /> },
  { path: '/story', element: <Story /> },
  { path: '/stage/:stageNumber', element: <StatePage /> },
  { path: '/*', element: <Error /> },

  { path: '/homedark', element: <Homedard /> },
  { path: '/aboutdark', element: <Aboutdark /> },
  { path: '/contactdark', element: <Contactdark /> },
  { path: '/licensedark', element: <Licensedark /> },
  { path: '/namedark', element: <Namedark /> },
  { path: '/hellodark', element: <Hellodark /> },
  { path: '/storydark', element: <Storydark /> },
  { path: '/stagedark/:stageNumber', element: <Statepagedark /> }
];

export default routes;