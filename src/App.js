import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import About from "./NavBar/About";
import Home from "./NavBar/Home";
import RootLayout from "./Layout/RootLayout";
import Resume from "./NavBar/Resume";
import Projects from "./NavBar/Projects";
import Contact from "./NavBar/Contact";
import NotFound from "./Layout/NotFound";

let route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="resume" element={<Resume />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  document.title = "Akhileswar | Portfolio";

  return <RouterProvider router={route} />;
}

export default App;
