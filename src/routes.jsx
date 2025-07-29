import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Story from "./components/pages/Story";
import License from "./components/pages/License";
import StatePage from "./components/StatePage";
import Name from "./components/pages/Name";
import Hello from "./components/pages/Hello";

import Homedard from "./components/darkpages/Homedard";
import Aboutdark from "./components/darkpages/Aboutdark";
import Contactdark from "./components/darkpages/Contactdark";
import Licensedark from "./components/darkpages/Licensedark";
import Namedark from "./components/darkpages/Namedark";
import Hellodark from "./components/darkpages/Hellodark";
import Storydark from "./components/darkpages/Storydark";
import Statepagedark from "./components/States/Statepagedark";

import Error from "./components/pages/Error";
import PageWrapper from "./components/PageWrapper";

const routes = [
  { path: '/', element: <PageWrapper><Home /></PageWrapper> },
  { path: '/name', element: <PageWrapper><Name /></PageWrapper> },
  { path: '/about', element: <PageWrapper><About /></PageWrapper> },
  { path: '/hello', element: <PageWrapper><Hello /></PageWrapper> },
  { path: '/license', element: <PageWrapper><License /></PageWrapper> },
  { path: '/contact', element: <PageWrapper><Contact /></PageWrapper> },
  { path: '/story', element: <PageWrapper><Story /></PageWrapper> },
  { path: '/stage/:stageNumber', element: <PageWrapper><StatePage /></PageWrapper> },
  { path: '/*', element: <PageWrapper><Error /></PageWrapper> },

  // Dark mode pages
  { path: '/homedark', element: <PageWrapper><Homedard /></PageWrapper> },
  { path: '/aboutdark', element: <PageWrapper><Aboutdark /></PageWrapper> },
  { path: '/contactdark', element: <PageWrapper><Contactdark /></PageWrapper> },
  { path: '/licensedark', element: <PageWrapper><Licensedark /></PageWrapper> },
  { path: '/namedark', element: <PageWrapper><Namedark /></PageWrapper> },
  { path: '/hellodark', element: <PageWrapper><Hellodark /></PageWrapper> },
  { path: '/storydark', element: <PageWrapper><Storydark /></PageWrapper> },
  { path: '/stagedark/:stageNumber', element: <PageWrapper><Statepagedark /></PageWrapper> },
];

export default routes;
