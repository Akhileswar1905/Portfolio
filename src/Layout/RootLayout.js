import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <div className="links">
            <NavLink className={"link"} to="/">
              Home
            </NavLink>
            <NavLink className={"link"} to="about">
              About
            </NavLink>
            <NavLink className={"link"} to="Resume">
              Resume
            </NavLink>
            <NavLink className={"link"} to="projects">
              My Projects
            </NavLink>
            <NavLink className={"link"} to="contact">
              Contact Me
            </NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
