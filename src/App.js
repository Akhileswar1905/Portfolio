// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";

import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";

// import About from "./NavBar/About";
// import Home from "./NavBar/Home";
// import RootLayout from "./Layout/RootLayout";
// import Resume from "./NavBar/Resume";
// import Projects from "./NavBar/Projects";
// import Contact from "./NavBar/Contact";
// import NotFound from "./Layout/NotFound";

// let route = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />}>
//       <Route index element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="resume" element={<Resume />} />
//       <Route path="projects" element={<Projects />} />
//       <Route path="contact" element={<Contact />} />
//       <Route path="*" element={<NotFound />} />
//     </Route>
//   )
// );

function App() {
  document.title = "Akhileswar | Portfolio";

  // return <RouterProvider router={route} />;
  // return "Hello This is My Portfolio";
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="resume" element={<Resume />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
