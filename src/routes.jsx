import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Story from "./components/pages/story";
import Error from "./components/pages/Error";

const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/story', element: <Story /> },
  { path: '/*', element: <Error /> },
];

export default routes;